const config = require('semantic-release-preconfigured-conventional-commits')

const releaseBranches = ["main"]
config.branches = releaseBranches
config.plugins.push(
    ["@semantic-release/exec", {
    }],
    ["@semantic-release/github", {
        "assets": [
            // Change this path if your pdf has another name.
            { "path": "report/report.pdf" },
            { "path": "req-breakdown-structure/requirements-breakdown-structure.pdf" },
            { "path": "conditions-of-satisfaction/conditions-of-satisfaction.pdf" },
            { "path": "domain-driven-development/domain-driven-development.pdf" },
            { "path": "project-overview-statement/project-overview-statement.pdf" },
            { "path": "risk-analysis/risk-analysis.pdf" },
            { "path": "sprints/sprints.pdf" },
        ]
    }],
    ["@semantic-release/git", {
        "assets": ["CHANGELOG.md", "package.json"],
        "message": "chore(release)!: [skip ci] ${nextRelease.version} released"
    }],
)
module.exports = config