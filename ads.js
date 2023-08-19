function ads() {
    const content = {
        ads_250_300: `<script type="text/javascript">
                        atOptions = {
                            'key': 'd8094931116328ee46db536d17e881d8',
                        'format': 'iframe',
                        'height': 250,
                        'width': 300,
                        'params': { }
                };
                        document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitablecreativeformat.com/d8094931116328ee46db536d17e881d8/invoke.js"></scr' + 'ipt > ');
                </script >`,
    }
    // document.getElementById('ads_250_300').innerHTML = content.ads_250_300;
};
ads();