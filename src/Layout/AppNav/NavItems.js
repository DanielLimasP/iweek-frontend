export const MainNav = [
    {
        icon: 'pe-7s-notebook',
        label: 'Inicio',
        to: '#/dashboards/basic',
    },
];

// Edit labels to componentsnav
export const ComponentsNav = [
    {
        icon: 'pe-7s-users',
        label: 'Densidad',
                to: '#/components/densidad',
            
    },
    {
        icon: 'pe-7s-cash',
        label: 'Derrama',
        to: '#/components/derrama',
    },
    {
        icon: 'pe-7s-culture',
        label: 'Establecimientos',
        to: '#/components/establecimientos',
                
    },

    {
        icon: 'pe-7s-home',
        label: 'Habitaciones',
        to: '#/components/habitaciones',
    },

    {
        icon: 'pe-7s-add-user',
        label: 'Llegada de Turistas',
            to: '#/components/turistas',
    },

    {
        icon: 'pe-7s-portfolio',
        label: 'Ocupación',
            to: '#/components/ocupacion',
    },

    {
        icon: 'pe-7s-moon',
        label: 'Turismo de Noche',
                to: '#/components/turismoNoche',
    },
    
    
];

export const ChartsNav = [
    {
        icon: 'pe-7s-news-paper',
        label: 'Info',
        content: [
            {
                label: 'Graficos',
                to: '#/Charts/Chartjs',
            },
            {
                label: 'Tablas',
                to: '#/tables/regular-tables',

            },
        ],
       
    },
];