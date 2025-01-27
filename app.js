/* -----------------------------------------------------------------------------
 Kebab Project 2.x (Kebab Revolution) - Web OS Client Platform for Ext JS 4.x
 http://kebab-project.com
 Copyright (c) 2011-2012 lab2023 - internet technologies TURKEY Inc.
 http://www.lab2023.com

    * LICENSE
    *
    * This source file is subject to the  Dual Licensing Model that is bundled
    * with this package in the file LICENSE.txt.
    * It is also available through the world-wide-web at this URL:
    * http://www.kebab-project.com/licensing
    * If you did not receive a copy of the license and are unable to
    * obtain it through the world-wide-web, please send an email
    * to info@lab2023.com so we can send you a copy immediately.
----------------------------------------------------------------------------- */

/**
 * Ext loader configuration
 */
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Ext.ux' : 'ext-js/examples/ux',
        'Kebab': 'kebab'
    }
});

// Require for Kebab.OS
Ext.require('Kebab.Kernel');