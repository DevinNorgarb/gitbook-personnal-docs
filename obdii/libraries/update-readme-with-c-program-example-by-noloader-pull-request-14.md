# Update README with C program example by noloader · Pull Request #14

<details>

<summary>New issue</summary>

**Have a question about this project?** Sign up for a free GitHub account to open an issue and contact its maintainers and the community.

By clicking “Sign up for GitHub”, you agree to our [terms of service](https://docs.github.com/terms) and [privacy statement](https://docs.github.com/privacy). We’ll occasionally send you account related emails.

Already on GitHub? Sign in to your account

</details>

[Conversation 3 ](broken-reference)Commits 4 Checks 0 Files changed

### Conversation

![noloader](https://avatars.githubusercontent.com/u/3538226?s=60\&v=4)

This commit updated README and provides C sample code to connect to the emulator.

Closes GH [#13](https://github.com/Ircama/ELM327-emulator/issues/13).

![@noloader](https://avatars.githubusercontent.com/u/3538226?s=40\&v=4)

![@noloader](https://avatars.githubusercontent.com/u/3538226?s=88\&u=254e47b655f2f85bc78c793cbc5a2f44331191fe\&v=4)

<details>

<summary></summary>

Copy link

</details>

Contributor Author

#### ![@noloader](https://avatars.githubusercontent.com/u/3538226?s=60\&u=254e47b655f2f85bc78c793cbc5a2f44331191fe\&v=4) **noloader** commented [Jul 10, 2021](broken-reference) •

I hope this commit is a starting point to document the sharp edge for C programmers. I'm not sure about the section heading of _C Programs_ since it does not apply to Windows C programs. _Linux Terminal_ may be a better section header.

This commit does not include the fix for the crash/backtrace. It may be prudent to add the check below to avoid the subscript problem when things inadvertently go sideways.

```
$ git diff
diff --git a/elm/elm.py b/elm/elm.py
index 77e9555..ef66b6a 100644
--- a/elm/elm.py
+++ b/elm/elm.py
@@ -1799,7 +1799,7 @@ class Elm:
         if self.delay > 0:
             time.sleep(self.delay)
 
-        if cmd[1] == 'T' and org_cmd.upper()[1] != 'T':  # AT or ST shall be unspaced
+        if (len(cmd) < 2 or len(org_cmd) < 2) or (cmd[1] == 'T' and org_cmd.upper()[1] != 'T'):  # AT or ST shall be unspaced
             logging.error("Improper AT or ST command %s.", repr(org_cmd))
             return header, cmd, ""
 
```

![@Ircama](https://avatars.githubusercontent.com/u/8292987?s=88\&v=4)

Thanks for this PR.

I think it has to be rechecked after verification of [#13 (comment)](https://github.com/Ircama/ELM327-emulator/issues/13#issuecomment-898754348)

[![@github-actions](https://avatars.githubusercontent.com/in/15368?s=88\&v=4)](https://github.com/apps/github-actions)

This PR becomed stale because of no feedback for 60 days.

Ircama added a commit that referenced this issue

[Sep 28, 2021](broken-reference)

![@Ircama](https://avatars.githubusercontent.com/u/8292987?s=40\&v=4)

```
Thanks to @noloader

Text revised to reflect the subsequent development.
```

2 participants

![@noloader](https://avatars.githubusercontent.com/u/3538226?s=52\&v=4) ![@Ircama](https://avatars.githubusercontent.com/u/8292987?s=52\&v=4)
