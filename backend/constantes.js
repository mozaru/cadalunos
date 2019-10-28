
function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

//servidor bd
define('_BD_HOST_'                      , process.env.BD_HOST);
define('_BD_PORT_'                      , process.env.BD_PORT);
define('_BD_DATABASE_'                  , process.env.BD_DATABASE);
define('_BD_LOGIN_'                     , process.env.BD_LOGIN);
define('_BD_PASSWORD_'                  , process.env.BD_PASSWORD);

