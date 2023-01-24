{
    'name': 'Coffee Shop',
    'description': 'Theme Coffee Shop',
    'version': '16.0.1.0.0',
    'author': '',
    'category': 'Theme/Creative',
    'depends': ['website', 'base'],
    'data': [
        'views/header.xml',
        'views/footer.xml',
        'views/contact_us.xml',
        'views/cart.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'theme_coffee_shop/static/src/css/style.css',
            'theme_coffee_shop/static/src/js/action.js',
            'theme_coffee_shop/static/src/js/cart.js',
        ],
    },
}
