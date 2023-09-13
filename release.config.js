const config = require('semantic-release-preconfigured-conventional-commits')

const releaseBranches = ["main"]
config.branches = releaseBranches
config.plugins.push(
    ["@semantic-release/exec", {
    }],
    ["@semantic-release/github", {
        "assets": [
            // Change this path if your pdf has another name.
            { "path": "approach/rustfields-approach.pdf" },
            { "path": "breakdown-structure/rustfields-breakdown-structure.pdf" },
            { "path": "conditions-of-satisfaction/rustfields-conditions-of-satisfaction.pdf" },
            { "path": "domain-driven-development/rustfields-domain-driven-development.pdf" },
            { "path": "project-overview-statement/rustfields-project-overview-statement.pdf" },
            { "path": "risk-analysis/rustfields-risk-analysis.pdf" },
            { "path": "sprints/rustfields-sprints.pdf" },
        ]
    }],
    ["@semantic-release/git", {
        "assets": ["CHANGELOG.md", "package.json"],
        "message": "chore(release)!: [skip ci] ${nextRelease.version} released"
    }],
)
module.exports = config