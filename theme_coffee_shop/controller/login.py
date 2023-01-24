from addons.web.controllers.home import Home
from odoo import http
from addons.website.controllers.main import Website


# class WebLogin(Home):
#     @http.route('/web/login', type='http', auth="none")
#     def web_login(self, redirect=None, **kw):
#         res = super(WebLogin, self).web_login(redirect, **kw)
#         return res

class Website(Website):
    @http.route('/', type='http', auth="public", website=True, sitemap=True)
    def index(self, **kw):
        res = super(Website, self).index(**kw)
        print(res)
        print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        return res
