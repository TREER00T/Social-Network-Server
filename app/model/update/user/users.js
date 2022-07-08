let openSql = require('opensql'),
    {
        DataBaseException
    } = require('app/exception/DataBaseException');


module.exports = {

    authCode(phone, authCode, cb) {
        openSql.update({
            table: 'users',
            edit: {
                authCode: authCode
            },
            where: {
                phone: `${phone}`
            }
        }).result(result => {
            try {
                (result[1].changedRows !== 0) ? cb(true) : cb(false);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },


    apikey(phone, key, cb) {
        openSql.update({
            table: 'users',
            edit: {
                apiKey: `${key}`
            },
            where: {
                phone: `${phone}`
            }
        }).result(result => {
            try {
                (result[1].changedRows !== 0) ? cb(true) : cb(false);
            } catch (e) {
                DataBaseException(e);
            }
        });
    },


    userOnline(phone, status) {
        openSql.update({
            table: 'users',
            edit: {
                isActive: `${status}`
            },
            where: {
                phone: `${phone}`
            }
        });
    }

}