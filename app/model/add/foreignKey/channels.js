let openSql = require('opensql'),
    {
        CASCADE
    } = openSql.keywordHelper;

module.exports = {

    channelsAdmins() {

        openSql.addForeignKey({
            table: 'channelsAdmins',
            foreignKey: 'adminId',
            referenceTable: 'users',
            field: 'id',
            onDelete: CASCADE,
            onUpdate: CASCADE
        }).result(()=>{});
        openSql.addForeignKey({
            table: 'channelsAdmins',
            foreignKey: 'channelId',
            referenceTable: 'channels',
            field: 'id',
            onDelete: CASCADE,
            onUpdate: CASCADE
        }).result(()=>{});

    },


    channelsUsers() {
        openSql.addForeignKey({
            table: 'channelsUsers',
            foreignKey: 'userId',
            referenceTable: 'users',
            field: 'id',
            onDelete: CASCADE,
            onUpdate: CASCADE
        }).result(()=>{});
        openSql.addForeignKey({
            table: 'channelsUsers',
            foreignKey: 'channelId',
            referenceTable: 'channels',
            field: 'id',
            onDelete: CASCADE,
            onUpdate: CASCADE
        }).result(()=>{});
    },


    channelContents(channelId) {
        openSql.addForeignKey({
            table: channelId + 'ChannelContents',
            foreignKey: 'forwardDataId',
            referenceTable: 'forwardContents',
            field: 'id',
            onDelete: CASCADE,
            onUpdate: CASCADE
        }).result(()=>{});
        openSql.addForeignKey({
            table: channelId + 'ChannelContents',
            foreignKey: 'senderId',
            referenceTable: 'channels',
            field: 'id',
            onDelete: CASCADE,
            onUpdate: CASCADE
        }).result(()=>{});
    }


}