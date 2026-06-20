#!/usr/bin/env bash
# Prune old GitHub Actions artifacts by name prefix; keep KEEP_COUNT newest per prefix.
#
# Usage: KEEP_COUNT=2 ./scripts/prune-action-artifacts.sh prefix1 [prefix2 ...]
set -euo pipefail

KEEP_COUNT="${KEEP_COUNT:-2}"
REPO="${GITHUB_REPOSITORY:?GITHUB_REPOSITORY required}"

if [ "$#" -eq 0 ]; then
  echo "Usage: KEEP_COUNT=2 $0 prefix1 [prefix2 ...]" >&2
  exit 1
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "[prune-action-artifacts] gh CLI not found — skipping artifact prune."
  exit 0
fi

log() { echo "[prune-action-artifacts] $*"; }

prune_prefix() {
  local prefix="$1"
  local ids
  ids="$(
    gh api --paginate "/repos/${REPO}/actions/artifacts" \
      --jq ".artifacts[] | select(.name | startswith(\"${prefix}\")) | \"\(.id)\t\(.created_at)\t\(.name)\"" \
      | sort -t$'\t' -k2 -r \
      | tail -n +"$((KEEP_COUNT + 1))" \
      | cut -f1
  )"

  local deleted=0
  while IFS= read -r artifact_id; do
    [[ -z "$artifact_id" ]] && continue
    log "Deleting artifact ${artifact_id} (${prefix})"
    gh api -X DELETE "/repos/${REPO}/actions/artifacts/${artifact_id}" >/dev/null
    deleted=$((deleted + 1))
  done <<< "$ids"

  log "Pruned ${deleted} ${prefix} artifact(s); keeping ${KEEP_COUNT} newest."
}

for prefix in "$@"; do
  prune_prefix "$prefix"
done
