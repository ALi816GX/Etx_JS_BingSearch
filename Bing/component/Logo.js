


Ext.ns("Bing");
Bing.Logo = Ext.extend(Ext.BoxComponent,
    {
        id: 'Logo',
        height: 80,
        autoEl: {
            tag: 'img',
            src: 'img/logo.png'
        },
    }
);
Ext.reg('Bing.Logo', Bing.Logo);

