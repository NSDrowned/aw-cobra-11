const TypTheme = {
    font: {
        family: 'Arial, sans-serif',
        size: {
            default: '16px',
            title: {
                xs: '32px',
                md: '48px'
            },
            subtitle: {
                xs: '16px',
                md: '21px'
            },
        },
        weight: {
            title: '700',
            subtitle: '400',
        },
        lineHeight: {
            title: {
                xs: '37px',
                md: '55px'
            },
            subtitle: {
                xs: '18px',
                md: '24px'
            },
        }
    },
    colors: {
        primary: '#2b3b53',
        primaryLight: '#2b3b53',
        text: '#262c33',
        button: '#fff',
        title: '#262c33',
        subtitle: '#677484',
        user: '#ff7300',
        header: {
            default: '#49494D',
            secondary: '#fff'
        },
        listing: {
            title: '#fff',
            text: '#e9f2ff',
            link: '#96cfff',
            button: '#fff'
        }
    },
    background: {
        default: '#fff',
        header: {
            default: '#2b3b53'
        },
        listing: {
            default: '#2b3b53',
            imageWebp: '/bg-typ.webp',
            imageJpg: '/bg-typ.jpg',
            border: '#ff8a3d',
            button: {
                default: '#ff8a3d',
                hover: '#ff924a'
            }
        },
        button: {
            default: '#2b3b53',
            hover: '#35517c'
        }
    },
    container: {
		sm: '100%',
		md: '740px',
		lg: '1230px'
	},
    header: {
        height: {
            xs: '50px',
            md: '60px'
		}
	},
	logo: {
        margin: {
            xs: '0 auto',
            md: '0'
        },
        height: {
            xs: '36px'
        },
        width: {
            xs: '160px'
        },
        filename: '#logo'
    }
};

export default TypTheme;