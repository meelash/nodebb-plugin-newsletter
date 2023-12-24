exports.filterPrivilegesList = async (list) => [
    ...list,
    'plugin_newsletter:send'
]

exports.filterPrivilegesGroupsList = async (list) => [
    ...list,
    'plugin_newsletter:send'
]

exports.filterPrivilegesListHuman = async (list) => [
    ...list,
    '[[newsletter:privilege.send]]',
]