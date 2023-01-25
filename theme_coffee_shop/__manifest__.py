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
        'views/cart_lines.xml',
        'views/cart_popover.xml',
        'views/cart_summary.xml',
        'views/payment.xml',
        'views/payment_summary.xml',
        'views/checkout.xml',
        'views/address.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'theme_coffee_shop/static/src/css/style.css',
            'theme_coffee_shop/static/src/js/action.js',
            'theme_coffee_shop/static/src/js/cart.js',
        ],
    },
}
