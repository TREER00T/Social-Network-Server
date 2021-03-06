let openSql = require('opensql'),
    {
        STAR,
        COUNT
    } = openSql.keywordHelper,
    {
        DataBaseException
    } = require('app/exception/DataBaseException');


module.exports = {

    channelId(id, cb) {
        openSql.find({
            get: 'id',
            from: 'channels',
            where: {
                id: `${id}`
            }
        }).result(result => {
            try {
                cb(result[1].length !== 0);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    isPublicKeyUsed(publicLink, cb) {
        openSql.find({
            get: 'id',
            from: 'channels',
            where: {
                publicLink: `${publicLink}`
            }
        }).result(result => {
            try {
                cb(result[1].length !== 0);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    isOwnerOfChannel(adminId, channelId, cb) {
        let isOwner = 1;
        openSql.find({
            get: 'id',
            from: 'channelsAdmins',
            where: {
                adminId: `${adminId}`,
                channelId: `${channelId}`,
                isOwner: isOwner
            }
        }).result(result => {
            try {
                cb(result[1].length !== 0);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    isOwnerOrAdminOfChannel(adminId, channelId, cb) {
        openSql.find({
            get: 'id',
            from: 'channelsAdmins',
            where: {
                adminId: `${adminId}`,
                channelId: `${channelId}`
            }
        }).result(result => {
            try {
                cb(result[1].length !== 0);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    isJoinedInChannel(channelId, userId, cb) {
        openSql.find({
            get: 'id',
            from: 'channelsUsers',
            where: {
                userId: `${userId}`,
                channelId: `${channelId}`
            }
        }).result(result => {
            try {
                cb(result[1].length !== 0);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    isUserAdminOfChannel(channelId, userId, cb) {
        openSql.find({
            get: 'id',
            from: 'channelsAdmins',
            where: {
                userId: `${userId}`,
                channelId: `${channelId}`
            }
        }).result(result => {
            try {
                cb(result[1].length !== 0);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    getCountOfListMessage(channelId, cb) {
        openSql.find({
            get: COUNT,
            from: '`' + channelId + 'ChannelContents`'
        }).result(result => {
            try {
                cb(result[0].size);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },


    getChannelInfo(channelId, cb) {
        openSql.find({
            get: STAR,
            from: 'channels',
            where: {
                id: `${channelId}`
            }
        }).result(result => {
            try {
                cb(result[1][0]);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },


    getCountOfUserInChannel(channelId, cb) {
        openSql.find({
            get: COUNT,
            from: 'channels',
            where: {
                id: `${channelId}`
            }
        }).result(result => {
            try {
                cb(result[0].size);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    getAllUsersForChannel(channelId, cb) {
        openSql.find({
            get: 'userId',
            from: 'channelsUsers',
            where: {
                channelId: `${channelId}`
            }
        }).result(result => {
            try {
                (result[1].length !== 0) ? cb(result[1]) : cb(null);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },

    getDataForChannelContentWithId(id, cb) {
        openSql.find({
            get: STAR,
            from:   '`' + id + 'ChannelContents`',
            where: {
                channelId: `${id}`
            }
        }).result(result => {
            try {
                (result[1][0] !== undefined) ? cb(result[1][0]) : cb(null);
            } catch (e) {
                DataBaseException(e);
            }
        });
    }

}