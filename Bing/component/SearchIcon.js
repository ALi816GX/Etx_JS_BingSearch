


Ext.ns("Bing");
Bing.SearchIcon = Ext.extend(Ext.BoxComponent,
    {
        id: 'SearchIcon',
        height: 150,
        autoEl: {
            tag: 'img',
            src: 'img/search.png',
        },
    }
);
Ext.reg('Bing.SearchIcon', Bing.SearchIcon);

