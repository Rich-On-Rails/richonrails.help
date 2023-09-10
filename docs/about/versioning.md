---
sidebar_position: 1
pagination_next: null
pagination_prev: null
title: Versioning
---

We use a modified [calver](https://calver.org/) versioning scheme for releases. 

`YYYY.RR.MICRO(.MODIFIER)`

- YYYY - The full year of the season, `2022`, `2023`

- RR - The round number within the season, `0`, `1`, `2`

- MICRO - Patch version `0`, `1`, `2`

- MODIFIER - An optional text tag like `dev`, `alpha`, `rc`


### Examples

- 2023.0.0.alpha – Pre-season alpha release before the 1st race round of the 2023 season.
- 2023.0.0.beta – Pre-season beta release before the 1st race round of the 2023 season.
- 2023.0.0 – Final pre-season release before the 1st race round of the 2023 season.
- 2023.0.1 – First pre-season patch release before the 1st race round of the 2023 season.
- 2023.1.0 – Final release after the 1st race round of the 2023 season.
- 2023.2.0 – Final release after the 2nd race round of the 2023 season.
- 2023.2.1 – First patch release after the 2nd race round of the 2023 season.
- 2023.2.2 – Second patch release after the 2nd race round of the 2023 season

