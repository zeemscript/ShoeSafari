# GitHub Actions pinning and updates

All workflow actions must use a full 40-character commit SHA. Keep a trailing comment with the upstream release tag so the pinned version is readable.

To update an action:

1. Choose a release from the action's upstream repository and review its release notes and source.
2. Verify the release tag resolves to the commit SHA in that same upstream repository.
3. Replace every occurrence across `.github/workflows/` with the full SHA and its release comment.
4. Review the workflow diff and run the affected workflow checks before merging.

Do not use branches or movable tags such as `main`, `stable`, or `v4` as the action reference. For `dtolnay/rust-toolchain`, the action code is pinned to its `v1` release; the `toolchain: stable` input intentionally continues to select Rust's stable compiler channel.
