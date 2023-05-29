<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'rigretah_dk_db' );

/** Database username */
define( 'DB_USER', 'rigretah_dk' );

/** Database password */
define( 'DB_PASSWORD', 'mcyGzAR4Fk3H' );

/** Database hostname */
define( 'DB_HOST', 'mysql60.unoeuro.com' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':%Q*1Fxv;lI*wr=~Gh+K?Qr9eyW!/@w|>??[8Dx3C<b<jktj(Kc3,[LR5 :3(Op}' );
define( 'SECURE_AUTH_KEY',  'rF(ZHY<p}3<CNLJDI%L)G-kLL&]YRQslJ9kKY|b_%N:?{1>Ehg@DJ/d9mY{K]w>!' );
define( 'LOGGED_IN_KEY',    'g]4dE_c0V9i113kwHed(I4ch0xgcG/Prx]ij=OR,:xB@*_:S,K]MiLqh}DWykp%{' );
define( 'NONCE_KEY',        'La.d:_`]gR{Fn/;f9ZrynYL?HMlf;QL*!-.:e5hU0WPv!(d7+3tvTqXBZ9)ymcQ/' );
define( 'AUTH_SALT',        '5oYZ}y|M:h<O:a2iK>E/wR^JBQIB:J(g9*[(p<Ub(2L&mupzr%S)|11A1h`dXq@8' );
define( 'SECURE_AUTH_SALT', 'QuU+<}[9^H)C7.H,RkLvP3Sl! eq]syGY55s.uxhQwoL^PQvDm M$?a?-bQO%ps]' );
define( 'LOGGED_IN_SALT',   'df(/ i@Cs,G29<Ms{`)-85C%(}74WZJ, 6QBxGfOYi3xjoyb~C&Fu7|}DI5l$[%4' );
define( 'NONCE_SALT',       'u0}Zj8NA]aBMQ};}r}MFg*p!9{=*X}X_ZB9A2uDmjS}6) Uy?Y_Pp38fHYJH0}7=' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_hc_jjg';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



define( 'WP_CACHE', true ); // Added by Hummingbird
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
