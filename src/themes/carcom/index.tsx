const CarComTheme = {
	font: {
        family: 'Arial, sans-serif',
        size: {
            default: '16px',
            title: {
                xs: '28px',
                md: '34px',
                lg: '40px'
            },
            subtitle: {
                xs: '24px',
                md: '24px',
                lg: '30px',
            },
            steps: '12px',
            button: {
                xs: '20px',
                md: '26px',
			},
			box: {
				title: {
					xs: '18px',
					md: '24px',
				},
				subtitle: {
					xs: '14px',
					md: '16px',
				}
			},
			dealers: {
				default: {
					title: {
						xs: '14px',
						md: '16px',
					},
					subtitle: {
						xs: '12px',
						md: '14px',
					}
				},
				main: {
					title: {
						xs: '18px',
						md: '20px',
					},
					subtitle: {
						xs: '12px',
						md: '14px',
					}
				},
				one: {
					title: {
						xs: '16px',
						md: '16px',
					},
					subtitle: {
						xs: '14px',
						md: '14px',
					}
				}
			}
        },
        weight: {
            default: 'normal',
            title: '700',
            subtitle: 'normal',
            steps: '300',
            button: '700'
        },
		lineHeight: {
			default: '24px',
            title: {
                xs: '32px',
                md: '40px',
                lg: '48px'
            },
            subtitle: {
                xs: '28px',
                md: '28px',
                lg: '38px',
            },
			steps: '16px',
			box: {
				title: {
					xs: '26px',
					md: '28px',
				},
				subtitle: {
					xs: '18px',
					md: '24px',
				}
			},
			dealers: {
				default: {
					title: {
						xs: '20px',
						md: '24px',
					},
					subtitle: {
						xs: '20px',
						md: '18px',
					}
				},
				main: {
					title: {
						xs: '21px',
						md: '24px',
					},
					subtitle: {
						xs: '18px',
						md: '20px',
					}
				},
				one: {
					title: {
						xs: '24px',
						md: '24px',
					},
					subtitle: {
						xs: '18px',
						md: '18px',
					}
				}
			}
        }
	},
	colors: {
        primary: '#154175',
        primaryLight: '#2566b4',
        text: '#6B6B6B',
        button: '#fff',
        title: '#016BFF',
        subtitle: '#6B6B6B',
		steps: '#fff',
        header: {
            default: '#154175',
            secondary: '#fff'
        },
        input: '#565656',
        label: '#6B6B6B',
        quote: {
            default: '#272727',
            secondary: '#787878',
        },
        dealers: {
            default: '#4D4D4D',
            title: '#4D4D4D', 
            text: '#6B6B6B'
        },
        form: {
            protect: '#4D4D4D'
        }
    },
	background: {
        default: '#FBFBFB',
        header: {
            default: '#EBEBEB',
            decoration: '#9B9B9B'
        },
        steps: '#154175',
        button: {
            default: '#E31818',
            hover: 'linear-gradient( 90deg,#c61413 0,#9c0002 100% )'
        },
        input: {
            default: '#fff',
        },
        box: '#fff',
        quote: {
            default: '#F3F3F5',
            dot: {
                default: '#D8D8D8',
                active: '#AEAEAE'
            }
        },
        dealers: {
            default: '#fff',
			all: '#E6E6E6',
			one: '#F3F3F5',
            checkbox: {
                default: '#fff',
                main: '#fff'
            },
            check: {
                default: '#154175',
                main: '#154175'
            }
        },
        form: {
            protect: '#9b9b9b'
        },
        cue: {
            default: '#E31818',
            secondary: '#FF551F'
        }
    },
	container: {
		sm: '100%',
		md: '740px',
		lg: '1000px'
	},
	logo: {
        width: {
            xs: '100px',
            md: '170px'
        },
        height: {
            xs: '20px',
            md: '50px'
        },
		filename: '#logo-carcom'
	},
	header: {
        margin: {
            xs: '0 0 10px',
            md: '0 0 42px'
        },
        height: {
            xs: '28px',
            md: '105px'
		}
	},
	button: {
        border: '#D20F12',
		shadow: {
			default: '0 20px 20px -20px rgba( 0, 0, 0, .7 )',
			active: '0 20px 10px -20px rgba( 0, 0, 0, .7 )'
		},


		background: '#E31818',
		hover: 'linear-gradient( 90deg, #c61413 0, #9c0002 100% )'
	},
	box: {
        shadow: '0 2px 11px 1px rgba( 0,0,0,.37 )',
        border: 'none'
	},
	input: {
        border: {
            default: '#D8D8D8',
            focus: '#3F81CE',
            error: '#E31818'
		},
		arrow: {
			default: '#AEAEAE',
			focus: '#3F81CE'
		},
		shadow: 'none'
	},
	typcontainer: {
		sm: '100%',
		md: '740px',
		lg: '1230px'
	},
	typHeaderLogo: {
		logoWidth: '160px',
		logoHeight: '36px'
	}
};

export default CarComTheme;