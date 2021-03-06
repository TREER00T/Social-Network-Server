let openSql = require('opensql');


module.exports = {

    channel(name, inviteLink, defaultColor, img, cb) {

        if (img === undefined) {
            openSql.addOne({
                table: 'channels',
                data: {
                    name: name,
                    inviteLink: inviteLink,
                    defaultColor: defaultColor
                }
            }).result(result => {
                (result[1] !== undefined) ? cb(result[1].insertId) : cb(null);
            });
            return;
        }

        openSql.addOne({
            table: 'channels',
            data: {
                img: img,
                name: name,
                inviteLink: inviteLink,
                defaultColor: defaultColor
            }
        }).result(result => {
            (result[1] !== undefined) ? cb(result[1].insertId) : cb(null);
        });

    },

    userIntoChannelsAdmins(userId, channelId, isOwner) {
        openSql.addOne({
            table: 'channelsAdmins',
            data: {
                adminId: userId,
                channelId: channelId,
                isOwner: isOwner
            }
        });
    },

    userIntoChannel(userId, channelId) {
        openSql.addOne({
            table: 'channelsUsers',
            data: {
                userId: userId,
                channelId: channelId
            }
        });
    }

}