

Ext.ns("Bing");

Bing.Tab_Panel = Ext.extend(Ext.TabPanel,
    {
        plain: true,
        border: false,
        activeTab: 0,
        width: 400,
        items: [
            {
                title: '国内版',
                items: [
                    {
                        xtype: 'textfield',
                        height: 40,
                        width: 400
                    },
                ]
            },
            {
                title: '国际版',
                items: [
                    {
                        xtype: 'textfield',
                        height: 40,
                        width: 400
                    },
                ],
            }
        ],
    }
);

Ext.reg('Bing.Tab_Panel', Bing.Tab_Panel);