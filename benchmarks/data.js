window.BENCHMARK_DATA = {
  "lastUpdate": 1758650062810,
  "repoUrl": "https://github.com/Peponks9/ethrex",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "52646071+Peponks9@users.noreply.github.com",
            "name": "josé v",
            "username": "Peponks9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f88b87a81aea2d96ea942ad1c7fb72e04bc3c1e7",
          "message": "Merge branch 'lambdaclass:main' into main",
          "timestamp": "2025-09-08T11:18:37-06:00",
          "tree_id": "7828b60b5cb4512eda1d4f94110580ed1da19845",
          "url": "https://github.com/Peponks9/ethrex/commit/f88b87a81aea2d96ea942ad1c7fb72e04bc3c1e7"
        },
        "date": 1757354516083,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 166468647748,
            "range": "± 329815295",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "52646071+Peponks9@users.noreply.github.com",
            "name": "josé v",
            "username": "Peponks9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cfe2575146b74b2b0d21bd0624c38ec3cf01ed2",
          "message": "Merge branch 'lambdaclass:main' into main",
          "timestamp": "2025-09-08T11:18:52-06:00",
          "tree_id": "7fc502c91a017e8a4eecc3b8395942dcc446275b",
          "url": "https://github.com/Peponks9/ethrex/commit/8cfe2575146b74b2b0d21bd0624c38ec3cf01ed2"
        },
        "date": 1757354557753,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 165806229741,
            "range": "± 706101893",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "52646071+Peponks9@users.noreply.github.com",
            "name": "josé v",
            "username": "Peponks9"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81fa5f85635987167f3043b4d23cf7def2dfca25",
          "message": "Merge branch 'lambdaclass:main' into main",
          "timestamp": "2025-09-09T15:03:07-06:00",
          "tree_id": "d841ddc73eb6a3270dc9ad942b354a38c4582378",
          "url": "https://github.com/Peponks9/ethrex/commit/81fa5f85635987167f3043b4d23cf7def2dfca25"
        },
        "date": 1757454126284,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 169548724876,
            "range": "± 672577276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "39842759+gianbelinche@users.noreply.github.com",
            "name": "Gianbelinche",
            "username": "gianbelinche"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffd0cae8f20b267c08b718fb7c9731a36058bd30",
          "message": "chore(l1): add branch and commit to script runner (#4517)\n\n**Motivation**\nWe want to add the branch and the commit to the script\n<!-- Why does this pull request exist? What are its goals? -->\n\n**Description**\nAdds the branch and commit\n<!-- A clear and concise general description of the changes this PR\nintroduces -->\n\n<!-- Link to issues: Resolves #111, Resolves #222 -->\n\nCloses #issue_number\n\n---------\n\nCo-authored-by: Ivan Litteri <67517699+ilitteri@users.noreply.github.com>",
          "timestamp": "2025-09-17T15:45:50Z",
          "tree_id": "fc2599c571653fe080577f7c0093ac8cf5bae862",
          "url": "https://github.com/Peponks9/ethrex/commit/ffd0cae8f20b267c08b718fb7c9731a36058bd30"
        },
        "date": 1758129789236,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 169151665322,
            "range": "± 262112394",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47506558+MegaRedHand@users.noreply.github.com",
            "name": "Tomás Grüner",
            "username": "MegaRedHand"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38e0ffc4487548a7b89de02b8b2b13c791a84682",
          "message": "refactor(l1): use `Path` instead of `String` for `--datadir` (#4543)\n\n**Motivation**\n\nWe are currently using `String` when dealing with file paths. This\npushes error-handling later into the node's lifecycle, which could delay\nsome errors.\n\n**Description**\n\nThis PR changes the CLI flag `--datadir` to receive a `PathBuf`, and\nalso changes all uses of the flag to receive a `&Path` or similar type.",
          "timestamp": "2025-09-19T19:01:16Z",
          "tree_id": "6272d7a8c23a1c2e94bfc90322a5e634d70b1577",
          "url": "https://github.com/Peponks9/ethrex/commit/38e0ffc4487548a7b89de02b8b2b13c791a84682"
        },
        "date": 1758480188127,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 89776412849,
            "range": "± 371567793",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manuel.bilbao@lambdaclass.com",
            "name": "Manuel Iñaki Bilbao",
            "username": "ManuelBilbao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d758fe7e68ba3adc8e2599fc520939d97bf3f5e",
          "message": "fix(l2): add EthClient config to proof_sender and proof_verifier (#4607)\n\n**Motivation**\n\n<!-- Why does this pull request exist? What are its goals? -->\nCurrently, proof sender and proof verifier doesn't have control over max\ngas price, retries and so.\n\n**Description**\n\n<!-- A clear and concise general description of the changes this PR\nintroduces -->\nReplace the simple `EthClient::new_with_multiple_urls` with\n`EthClient::new_with_config`\n\n<!-- Link to issues: Resolves #111, Resolves #222 -->\n\nCloses #4562",
          "timestamp": "2025-09-23T16:18:50Z",
          "tree_id": "726097d11453cc5b6d67e1dfd11d888850c173bf",
          "url": "https://github.com/Peponks9/ethrex/commit/7d758fe7e68ba3adc8e2599fc520939d97bf3f5e"
        },
        "date": 1758650061181,
        "tool": "cargo",
        "benches": [
          {
            "name": "Block import/Block import ERC20 transfers",
            "value": 90674859834,
            "range": "± 372015548",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}