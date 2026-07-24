#!/usr/bin/env bash
# Install lychee link checker with retries (GitHub release downloads can 504 on self-hosted runners).
set -euo pipefail

VERSION="${LYCHEE_VERSION:-v0.24.2}"
INSTALL_DIR="${RUNNER_TEMP:?RUNNER_TEMP required}/lychee/bin"

log() { echo "[install-lychee] $*"; }

if command -v lychee >/dev/null 2>&1; then
  log "Using existing lychee: $(lychee --version | head -1)"
  exit 0
fi

ARCH="$(uname -m)"
OS="$(uname -s)"
case "${OS}-${ARCH}" in
  Linux-x86_64) TARGET="x86_64-unknown-linux-gnu" ;;
  Linux-aarch64) TARGET="aarch64-unknown-linux-gnu" ;;
  Darwin-arm64) TARGET="aarch64-apple-darwin" ;;
  Darwin-x86_64) TARGET="x86_64-apple-darwin" ;;
  *)
    log "Unsupported platform: ${OS}-${ARCH}" >&2
    exit 1
    ;;
esac

FILENAME="lychee-${TARGET}.tar.gz"
DOWNLOAD_URL="https://github.com/lycheeverse/lychee/releases/download/lychee-${VERSION}/${FILENAME}"
TEMP_DIR="${RUNNER_TEMP}/lychee-download"
MAX_ATTEMPTS="${LYCHEE_DOWNLOAD_ATTEMPTS:-5}"

rm -rf "${TEMP_DIR}"
mkdir -p "${TEMP_DIR}" "${INSTALL_DIR}"
cd "${TEMP_DIR}"

log "Downloading ${DOWNLOAD_URL}"
for attempt in $(seq 1 "${MAX_ATTEMPTS}"); do
  if curl -sfL --retry 3 --retry-all-errors --retry-delay 2 \
    -o "${FILENAME}" "${DOWNLOAD_URL}"; then
    break
  fi
  if [[ "${attempt}" -eq "${MAX_ATTEMPTS}" ]]; then
    log "Failed to download after ${MAX_ATTEMPTS} attempts" >&2
    exit 1
  fi
  sleep_for=$((attempt * 2))
  log "Attempt ${attempt} failed, retrying in ${sleep_for}s..."
  sleep "${sleep_for}"
done

tar -xzf "${FILENAME}"
BINARY="${TEMP_DIR}/lychee"
if [[ ! -f "${BINARY}" ]]; then
  BINARY="$(find "${TEMP_DIR}" -maxdepth 2 -name lychee -type f | head -1)"
fi
if [[ ! -f "${BINARY}" ]]; then
  log "Cannot find lychee binary in archive" >&2
  exit 1
fi

install -m 755 "${BINARY}" "${INSTALL_DIR}/lychee"
echo "${INSTALL_DIR}" >> "${GITHUB_PATH:?GITHUB_PATH required}"
log "Installed to ${INSTALL_DIR}/lychee"
