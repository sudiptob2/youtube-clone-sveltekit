import { X_RapidAPI_Key } from '$env/static/private';
import { error } from '@sveltejs/kit';
import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'https://youtube138.p.rapidapi.com/',
	headers: {
		'X-RapidAPI-Key': X_RapidAPI_Key,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	},
	params: {
		hl: 'en',
		gl: 'US'
	}
});
export const getHomePage = async () => {
	try {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const result: any = await getMockData();
		// const result = await axios('home/');
		return result.data.contents;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};

export const getSearch = async ({ query, filters }: { query: string; filters: string }) => {
	try {
		console.log(query, filters);
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const result: any = await getSearchMockData();
		// const result = await axios('search/', {
		// 	params: {
		// 		q: query,
		// 		cursor: filters
		// 	}
		// });
		console.log(result.data);
		return result.data;
	} catch (error) {
		console.error(error);
	}
};
export const getVideoDetails = async (id: string) => {
	try {
		const result = await axios('video/details/', {
			params: {
				id
			}
		});
		return result.data;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getVideoComments = async (id: string) => {
	try {
		const result = await axios('video/comments/', {
			params: {
				id
			}
		});

		return result.data;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};
export const getRelatedContent = async (id: string) => {
	try {
		const result = await axios('video/related-contents/', {
			params: {
				id
			}
		});

		return result.data.contents;
	} catch (e) {
		throw error(500, {
			message: 'an error occurred, refresh the page and try again'
		});
	}
};

const getMockData = () => {
	return new Promise((resolve) => {
		const mockData = {
			contents: [
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTM49hEx9zyui_0zDZKi75EgqJPJfuDmWu1cePdQQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@MrBeast',
							channelId: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
							title: 'MrBeast'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 968,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/7ESeQBeikKs/mqdefault_6s.webp?du=3000&sqp=CLGqi60G&rs=AOn4CLBPWuqI9GKS7fyWM3ILAJ_eV8pE_g',
								width: 320
							}
						],
						publishedTimeText: '3 hours ago',
						stats: {
							views: 8326584
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/7ESeQBeikKs/hq720_custom_1.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhcIGUoTTAP&rs=AOn4CLA0Di3VG72cjayHvHMyqBAKA5Pctw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/7ESeQBeikKs/hq720_custom_1.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhcIGUoTTAP&rs=AOn4CLCrB6aRsmkQ_t3DUZpCWJqY2_NgIw',
								width: 720
							}
						],
						title: 'Protect $500,000 Keep It!',
						videoId: '7ESeQBeikKs'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/Y5A9RSy4RdKcSv91RmuXICzgD6b6SqU-F8UINJIBJszZkOTFM1MdibrdtuAY9ApKdGYcLQJheg=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@RelaxJazzVortex',
							channelId: 'UCdAhR5hfc-Jt1LuGAdP9kYg',
							title: 'Relax Jazz Vortex'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 28893,
						movingThumbnails: null,
						publishedTimeText: '7 days ago',
						stats: {
							views: 196956
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/x6GGhPhozvs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsit1CnjE6kPHt0RKKfoK3Lkf7mQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/x6GGhPhozvs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpbtXY_S2XATMf7NNOzb-LUrLDrA',
								width: 720
							}
						],
						title:
							'Relaxing Winter Jazz Mixed With Falling Snow - Cozy Luxurious Apartment Space With A Warm Fireplace',
						videoId: 'x6GGhPhozvs'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZROUnZlyWq_sT1jnrzoJWxsj3slaX8hoovhBTx4=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@PawnStars',
							channelId: 'UCmyjVwYZbp5YPYTUyeopO2g',
							title: 'Pawn Stars'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 2582,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/DRVlUDQCmNk/mqdefault_6s.webp?du=3000&sqp=CJPXi60G&rs=AOn4CLC4FBulXF6T8rUxpzqN9dghkbs5qA',
								width: 320
							}
						],
						publishedTimeText: '1 year ago',
						stats: {
							views: 18038834
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/DRVlUDQCmNk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRz1IgG29tzYk6FEwJQXh_NfWDOw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/DRVlUDQCmNk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCzJlORkqJ6cjRqR8aMGDMXqX-GA',
								width: 720
							}
						],
						title: 'Pawn Stars: 7 INSANELY HIGH APPRAISALS (Huge Profits For Rare Items!)',
						videoId: 'DRVlUDQCmNk'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/CPzwWg0pjQWoHBm2CFqcmKxJVuhKiYio25pM3kUjp8jeOi0mCRYAARKY40GightrVEEYIGtX=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@RelaxingNightJazz',
							channelId: 'UCdFC7q67Wsiv8zrPg8nF_1w',
							title: 'Relaxing Night Jazz'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 29125,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/WeYY7-iq-28/mqdefault_6s.webp?du=3000&sqp=CJnYi60G&rs=AOn4CLA9XZS_YrTzXRaWvFcr7qvYXRWZww',
								width: 320
							}
						],
						publishedTimeText: '19 hours ago',
						stats: {
							views: 140
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/WeYY7-iq-28/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOjJCl8F0jqFmI-Jdfq2M2DhkEtw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/WeYY7-iq-28/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAYbp3SWl8WGDF2iRulsquwEYcbg',
								width: 720
							}
						],
						title:
							'Night Jazz in San Francisco - Smooth Piano Jazz and Relaxing Background Music for Peaceful Sleep',
						videoId: 'WeYY7-iq-28'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZT9Vr_vWzwQ8ZQTR1L4lEVH_1Idkmwra4GOrqt5WA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@Lesics',
							channelId: 'UCqZQJ4600a9wIfMPbYc60OQ',
							title: 'Lesics'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 930,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/1NkBfLBov5Q/mqdefault_6s.webp?du=3000&sqp=CODEi60G&rs=AOn4CLAbRxhQi5j8kr4avvlnEvrVCIYtYg',
								width: 320
							}
						],
						publishedTimeText: '3 months ago',
						stats: {
							views: 8172660
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/1NkBfLBov5Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd0QI6In_3xvsKObtkS8abiP-JRg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/1NkBfLBov5Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5yP0FT3J12EkTim0aCmXPt3TAIQ',
								width: 720
							}
						],
						title: 'The Collapse of World Trade Center | The Complete Physics',
						videoId: '1NkBfLBov5Q'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTqmoahPxLCuO-3jSVvDqTngV8PPf-hTX0TZoNy3A=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@TGplays',
							channelId: 'UCqVCSWnuOSPm26orvNDTuWQ',
							title: 'TG Plays'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 927,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/2Dt4xCLpWuQ/mqdefault_6s.webp?du=3000&sqp=CODEi60G&rs=AOn4CLCXAC3rnKKgOt6uZjIggXz18GD2Mw',
								width: 320
							}
						],
						publishedTimeText: '1 day ago',
						stats: {
							views: 757216
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/2Dt4xCLpWuQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAERxCMdCikeac1AIU1UpsnjRwYQA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/2Dt4xCLpWuQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJv63q4c3XSLY6pZM-6yTRqQUMgg',
								width: 720
							}
						],
						title: 'The *RANDOM* EMOJI BOSS Challenge in Fortnite!',
						videoId: '2Dt4xCLpWuQ'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/FhYUyEVu65-7qWYWCpG9u38fffKcc0t2Y2XtcwRUU7Tr1zZXY6Na0CdH2eT4PBirS3oFmdiuNQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@mythicalkitchen',
							channelId: 'UCXGR70CkW_pXb8n52LzCCRw',
							title: 'Mythical Kitchen'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 2389,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/ENhfIeZF_AY/mqdefault_6s.webp?du=3000&sqp=CNTDi60G&rs=AOn4CLB6K_86rxDs3LBWTbt5ax75ND0d7Q',
								width: 320
							}
						],
						publishedTimeText: '4 days ago',
						stats: {
							views: 5582122
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/ENhfIeZF_AY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0ut_WTXg3DKmuBgY0WkM4KIvZ7Q',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/ENhfIeZF_AY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVk8XXmMp3g_YHjzWoLEBGPlsZXg',
								width: 720
							}
						],
						title: 'Gordon Ramsay Eats His Last Meal',
						videoId: 'ENhfIeZF_AY'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZSAMOTamsPloNyIHxHvJA8Ihm4gSxG7QfSuzgOQKg=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@OutdoorBoys',
							channelId: 'UCfpCQ89W9wjkHc8J_6eTbBg',
							title: 'Outdoor Boys'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 1239,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/qRODjitiKP8/mqdefault_6s.webp?du=3000&sqp=CMTCi60G&rs=AOn4CLBF7LJ2b2MQYY_eLb9ogfuovVzwlg',
								width: 320
							}
						],
						publishedTimeText: '1 year ago',
						stats: {
							views: 9916818
						},
						thumbnails: [
							{
								height: 270,
								url: 'https://i.ytimg.com/vi/qRODjitiKP8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDFtQ2PfFAqMW5WPXTY_IpFDHgPg',
								width: 480
							}
						],
						title: 'Can I Survive Alaskan Winter with No Sleeping Bag, No Tent & No Tarp?',
						videoId: 'qRODjitiKP8'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/XV0P-udpNJoOhwVNmXo3o846xitel-D-GPn-lH96yqhkTNDivcOMEv-7pXootGTStzvcDt_m3g=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@ClassicSoftRockSongs',
							channelId: 'UC_4WBBwRu-yUUCiYG11xP2A',
							title: 'Classic Soft Rock Songs'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 42899,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/3AF5clxBzQ4/mqdefault_6s.webp?du=3000&sqp=CJShi60G&rs=AOn4CLCAe2W8MztkYb50xNlk8IHKomgcRQ',
								width: 320
							}
						],
						publishedTimeText: 'Streamed 4 months ago',
						stats: {
							views: 618056
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/3AF5clxBzQ4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfOAI84DnlfDr9Rtmzx9Zw14E4Og',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/3AF5clxBzQ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKs_QNqw8DjDctJnxn3NLHPefvEA',
								width: 720
							}
						],
						title:
							'Eric Clapton, Rod Stewart, Lionel Richie, Air Supply, REO Speedwagon 🎙 Classic Soft Rock Love Songs',
						videoId: '3AF5clxBzQ4'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/OOT0eq8LoW8V3PMURGYuk0kRSgRGP7EsuGZoODhHBcg1jCB1qkuIAxS-XGnjKX9Q6rf-WKTvkQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@ABCNews',
							channelId: 'UCBi2mrWuNuyYy4gbM6fU18Q',
							title: 'ABC News'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 375,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/M_NULoJyNAw/mqdefault_6s.webp?du=3000&sqp=CLTEi60G&rs=AOn4CLBCd2hMxG4qFYXQBkM2ZxrwPwv0lQ',
								width: 320
							}
						],
						publishedTimeText: '2 days ago',
						stats: {
							views: 715020
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/M_NULoJyNAw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0I6HO3y21o5LvaGa-W_LZxaRYdQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/M_NULoJyNAw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS-hC80VJJPKFhj93HmpVFP9GpBw',
								width: 720
							}
						],
						title: 'Watch Jelly Roll deliver testimony at Senate hearing on fentanyl bill',
						videoId: 'M_NULoJyNAw'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/znI032VcQV_GQeu1iWcowa4lgaLYZ43I_Cpp8xTZ1RwsYSJc2DBUNLDMaSz-OCf11R1SXEjWkTo=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@RedlistCountry8888',
							channelId: 'UC-H7AKCQp5gmnBZESfdIU1w',
							title: 'Redlist Country'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 4015,
						movingThumbnails: null,
						publishedTimeText: '7 months ago',
						stats: {
							views: 2629496
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/7nJzq-9xA9k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeTAOf2caw9XNPsM4smw29GPoBcw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/7nJzq-9xA9k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQNGPFHV5p3xtOAlsdEA7NFmRjWg',
								width: 720
							}
						],
						title:
							'Luke Combs, Chris Stapleton, Kane Brown, Luke Bryan, Morgan Wallen - Country Music Playlist 2023',
						videoId: '7nJzq-9xA9k'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/wbJLUE85l6Do5ONlwrMLd3nrmteVrbFIGMP4YY61LNwAoorKKrDasuRTOCkeovlIj39bRBmPXg=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@99Projects',
							channelId: 'UCjD5lteW7ACp5P37bhr0S8Q',
							title: '99 Projects'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 3641,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/LseYFLk4y8E/mqdefault_6s.webp?du=3000&sqp=CILSi60G&rs=AOn4CLAz52iwr-oRORvuMC6okH-iqxvlqA',
								width: 320
							}
						],
						publishedTimeText: '4 weeks ago',
						stats: {
							views: 2031146
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/LseYFLk4y8E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW1Q8iZkje_dneMAIXaDgcmdDZSQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/LseYFLk4y8E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAaRcCTiOw9VyOHhhA0HO7nh-ohEA',
								width: 720
							}
						],
						title: 'I bought an ABANDONED CABIN in the WOODS - Vacant for over a hundred years!',
						videoId: 'LseYFLk4y8E'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZQ13fBJH0fNLEr8-lX9VG440QdujvzAw-8RKAVo=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@NakedScience',
							channelId: 'UC8JT2m0mKEgvEtie3JNKwew',
							title: 'Naked Science'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 2980,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/pgwPBDjrOg8/mqdefault_6s.webp?du=3000&sqp=COLGi60G&rs=AOn4CLDIJGV-z2vexwQW4OADVA0RU5iPnw',
								width: 320
							}
						],
						publishedTimeText: '8 days ago',
						stats: {
							views: 916746
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/pgwPBDjrOg8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdH6ps1KoR4QkmHIV0MnsefpEMCg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/pgwPBDjrOg8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVsKXAHoV3bmm9dFXdWmJqUL6iyA',
								width: 720
							}
						],
						title: 'What Happens If A Super Volcano Erupts? | The Yellowstone Super Volcano',
						videoId: 'pgwPBDjrOg8'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/HqiBCZqeW_aFXzK1s8vOg3-VaGu5IhEoiCWQNPT_zjxdtWClRdr7Hijw4gK79xzPBDkH7e6fng=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@soothingmelodies48',
							channelId: 'UCjc-f-TjrVfyeAN_NG95Ftw',
							title: 'Soothing Melodies'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 13801,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/V2hRkdRAvOQ/mqdefault_6s.webp?du=3000&sqp=CJzAi60G&rs=AOn4CLBHVOTf0RYriZnefuVos-G4xWSmWQ',
								width: 320
							}
						],
						publishedTimeText: 'Streamed 1 month ago',
						stats: {
							views: 1070225
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/V2hRkdRAvOQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnXVdVpOx7GvkblDWqMUG8Ag-QrQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/V2hRkdRAvOQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeUjnzB0o9d0PN-e2Lt-trw-onIA',
								width: 720
							}
						],
						title:
							'Beautiful Relaxing Music - Stop Overthinking, Stress Relief Music, Sleep Music, Calming Music #82',
						videoId: 'V2hRkdRAvOQ'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/9lAsV0yGrpWG_BnnJ9zTuRZIKlznerpfsEHA1xJTrfJ_vuiustVNugV7Qhv_2hPv4M9ib6Gh3w=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@NotWhatYouThink',
							channelId: 'UC4pNDofN0Xh-z2bhh62g8Ow',
							title: 'Not What You Think'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 1192,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/8MlM6B2OMlE/mqdefault_6s.webp?du=3000&sqp=CIqji60G&rs=AOn4CLDvWnyP3GCgUJ1AW23LWLFanCgbQA',
								width: 320
							}
						],
						publishedTimeText: '3 weeks ago',
						stats: {
							views: 3839999
						},
						thumbnails: [
							{
								height: 270,
								url: 'https://i.ytimg.com/vi/8MlM6B2OMlE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBu_43KrmVs3rPi0l8McYl0JbIA4Q',
								width: 480
							}
						],
						title: "I Flew Into US Navy's Largest Stealth Ship",
						videoId: '8MlM6B2OMlE'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/2Ajz_ndYQvJokMib9hagqfNQEBJZeKzlrR69EnK7ExFeLxJdTiphM1FSNJXfYlkObocsWObhx9o=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@BigBankz',
							channelId: 'UCUbgxSBXIk5D3pUWd2hqBGA',
							title: 'BigBankz'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 2205,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/jmaBiHjPUAU/mqdefault_6s.webp?du=3000&sqp=CMOui60G&rs=AOn4CLDlIPUXoGWxmWSXr9VHV53dI34xzA',
								width: 320
							}
						],
						publishedTimeText: '7 days ago',
						stats: {
							views: 303660
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/jmaBiHjPUAU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCb-1siwZ9dpoMVrmRJPPw88GHsmg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/jmaBiHjPUAU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdDTes_SNgsTQlfa7T4sZIMvM6hg',
								width: 720
							}
						],
						title: 'Abandoned $5.5 Million MEGA Mansion | Everything Left Behind',
						videoId: 'jmaBiHjPUAU'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/QlTKeA9Cx-4qajm4VaLGGGH0cCVe8Fda_c6SScCLPy8fsu0ZQkDhtBB3qcZastIZPQNew5vi-LM=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@LucidDream55',
							channelId: 'UC6jH5GNi0iOR17opA1Vowhw',
							title: 'Lucid Dream'
						},
						badges: ['LIVE'],
						isLiveNow: true,
						lengthSeconds: null,
						movingThumbnails: null,
						publishedTimeText: null,
						stats: {
							viewers: 802
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/2SxS44X-Uok/hq720_live.jpg?sqp=COzZi60G-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGYvcO1RCKkNo-SE8AQTKrVRcaXg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/2SxS44X-Uok/hq720_live.jpg?sqp=COzZi60G-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUvFdsUSE_MaB6xKbJzUgI-yCNoQ',
								width: 720
							}
						],
						title:
							'Gentle music, calms the nervous system and pleases the soul - healing music for the heart and blood',
						videoId: '2SxS44X-Uok'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/cR95fDVyuYNdQQbBr1D_BwfEwY-WwpEXpIJeLI50fX7QaWWBe6ey7vmoyUPE-RFzOsbUZ1f7cA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@DavidEllisYawtYawt',
							channelId: 'UCAkGrDHaLZ6bG7A26eMQyBg',
							title: 'David Ellis: Yawt Yawt'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 1427,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/_eykVzIE1Hc/mqdefault_6s.webp?du=3000&sqp=CNrBi60G&rs=AOn4CLCrAR9vwoLRg27bSA3gbXOyUermHg',
								width: 320
							}
						],
						publishedTimeText: '3 days ago',
						stats: {
							views: 152087
						},
						thumbnails: [
							{
								height: 270,
								url: 'https://i.ytimg.com/vi/_eykVzIE1Hc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCH7uOIytwJo7U3ElFpsggoET8nTw',
								width: 480
							}
						],
						title: 'First wild hog catch of 2024 with Iraqi veteran and Ole Red.',
						videoId: '_eykVzIE1Hc'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/HwpHaCaatHTI3N1imp5ZszL8_raSsxBq60UHScSpXC6e6VySeOlZ8Y3msYgum4vzCH5jmCxLvEU=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@dime-',
							channelId: 'UCpyoYVlp67N16Lg1_N4VnVw',
							title: 'dime'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 1001,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/y75uHYJBj_A/mqdefault_6s.webp?du=3000&sqp=CIC7i60G&rs=AOn4CLClviP4nuQbEiAKsQArYamJyTikEA',
								width: 320
							}
						],
						publishedTimeText: '3 weeks ago',
						stats: {
							views: 568994
						},
						thumbnails: [
							{
								height: 270,
								url: 'https://i.ytimg.com/vi/y75uHYJBj_A/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjOVf2GCI9giWu5xvKnq1_Xn-Omg',
								width: 480
							}
						],
						title: 'WILDEST Endings in NBA History',
						videoId: 'y75uHYJBj_A'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/PLsX6LIg5JbMJR9v7eTD7nQOPmZN16_X7h_uACw5qeWLAewiNfasZFsxQ48Dn8wZ_4McKUPZSA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@failarmy',
							channelId: 'UCPDis9pjXuqyI7RYLJ-TTSA',
							title: 'FailArmy'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 3681,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/0stEzx7LRLo/mqdefault_6s.webp?du=3000&sqp=CIq-i60G&rs=AOn4CLAfrxbfJwHFL0TR63cxp2wmNY_N8Q',
								width: 320
							}
						],
						publishedTimeText: '3 days ago',
						stats: {
							views: 1939245
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/0stEzx7LRLo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDI_EHglERYq-jJ_PoCDxw_gOdOAg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/0stEzx7LRLo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdaRGh7A1qyuOQD1Yvi3w4QeyzTQ',
								width: 720
							}
						],
						title: 'Best Fails of the Decade | Try Not to Laugh',
						videoId: '0stEzx7LRLo'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZQeJE786--NncFihm6aeY2k0k4QjP7cswZFZDEVKfU=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@espn',
							channelId: 'UCiWLfSweyRNmLpgEHekhoAg',
							title: 'ESPN'
						},
						badges: [],
						isLiveNow: false,
						lengthSeconds: 1539,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/m-NTaEbfAtg/mqdefault_6s.webp?du=3000&sqp=CJiZi60G&rs=AOn4CLCkbGmpeseGe7VSL2CmEensteIQ4A',
								width: 320
							}
						],
						publishedTimeText: '1 day ago',
						stats: {
							views: 722938
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/m-NTaEbfAtg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpYMdL8qzgzn_1rVJiD1qBtTLG6Q',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/m-NTaEbfAtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYPz7G0c65GLLc5MPGIJSIEMRp1Q',
								width: 720
							}
						],
						title:
							'Exclusive Nick Saban interview after his Alabama retirement w/ Rece Davis 🔊 | ESPN College Football',
						videoId: 'm-NTaEbfAtg'
					}
				}
			],
			cursorNext:
				'NHFtRnNnTGdFUklQUmtWM2FHRjBYM1J2WDNkaGRHTm9HcXdSUTBKb05sOUJlRWhWUjJ3MlQxTXhkRlpxU1RCVVZWSk9Xak5PU2sxcmJGbFBTRkoyVmtoUmVGVkZaR2xSVmxwM1kxVk9kRm93ZEVoWFIzZDNWMFJPUTJGR2IzbFdiVnBxVFdwV2Ixa3dhRTlpTWtsNlZXMWFhbUpXV25WWlZtTTFaRlpzV0dReFRrbGxiRVl3Vld0a01FMXRVa2RYYmxKaFVrZGpkMVl3V2tkU1IwWlhWRzVHYkZJemFFUldWbFp2Wld4a1NWVnFVbEJXVjJRelZWY3hhbGxWZEc1UlZVWmhWbnBTUWxGV1dsZFdSVVpDVW14YVZtUXdSa05SVlZaaFVtMVJlV0ZIYUd0U2FtdDNXV3BGTlUweGJGbFZiWEJvVVZWR1ExRldSa1pSVlVaQ1VsVkdRbEZWVmtOUlZXUkxVV3RPUWxGV1RrWk5NRXB2VjJwS1YxcHRUWGxPVjJocVUwVTFkbGxxVGxOYWJWSklUMWhLWVZaNlVtaFNXR1J4VWpOYVVWWklRbk5hU0ZaRlVWaG9XRnA2VGxWUFJWWkpXbFYzZEZGWWFFSmhWVll6WVd0a01sVkdVbmRpUjFJeFVrVkdORll5WTNwV1JHaEdVMGRXVFV4VlJqUlNSMFkyWWpOYWVWSkZjRVpUVlU1MlRrVnNSR0ZXYkV4VFZrWjJXbTVrZWxwdFJqUmFNblJoVVRBNVZsRnRUbTlWYlhSb1UwVkdNRmRXWkU5bFJYaFlWRmhTVWxkR1duVlVWM0JEVmtaV1NWUnVXbHBrYTJ0MFVWVkdkbHByVG01ak1IUkVXVEI0U1UxdVRscFRhMFl6WVZWR1ExUllTbWhpVjFKU1UydFNRbG93UmtaVlJHUkpZbXMxVEdNeU1ERldNalZJVlZjNVVsRXlaSHBUTUU1cVZFVm5lV014YkV0UldHUndXbFZHYlZOVE1VSlJWemxRWkRKdk1GUkZUa3hrVjJod1kycEtRMlZWZEd4aFZHUkNVbFYwUmxGWE9VMVJNbVIxVVRObk5XTnJaRVJWVlRGS1kxZGthV1ZXUW01UlZYUlhXak5DVTFFeWRHWlJNMmMxWTJ0a1JGWlhkRXBPVmtaR1ZUQnplRk5yVmxKTlNHaERWVE53VjAxWFZsZFBXRXBQVm5wUmQxbDZUa3RsVmtwV1UxaG9hMDF0VVhsVk1XUjNWVlpTYzFWc2JGWmxiWGhKVkZab1YySldTbFZpUm1oV1YwZG9kbGx0ZEVkbFZWbDZWMjV3V21GVVJuQlhWbVJPWkVkV1dGUllVbFpOVjFKVVZGZHdVMlZGTVZkV2JGSnFUV3BzY0U5SGJ6QlJWVTV2VVZWMFJHUXlPVXRrTTA1dFdWaG9ibUV3VWtSVGFsSkRUMGR2TUZGVlRtNU9NRTVSV2pOT1NreFVWWGxoYm1NMFdERkZNRnBGVWtsUlZrWjJWVlZPYm1Nd2RFUlpNSGhKVFc1T1dsTnJSak5oVjFaQ1dtdHJkRkZWUm5aVWJtUnhUa1YwUkZSdE1UUmhXRVpFVWtoR01HSlZkRVZWVnpsU1VUSmtlbE13VG1wVVJXZDVZekZzUzFGWVpIRk9WVVp0VTFNeFFsRlhPVkpSTW1SNlV6Qk9hbFJGWjNsak1XeExVVmhrY0ZGVlRqSlRVekZDVVZjNVVsRXlaSHBUTUU1cVZFVm5lV014YkV0UldHUndXbFZHYlZOVE1VSlJWemxRWkRKdk1GUkZUa3RXUmpsMllqRkNUV05xYUVWamVrWkNVbFYwUmxGWE9VMVJNbVIxVVRObk5XTnJaRVJWVlRGS1ltMWtTV1ZXUW01UlZYUkZZekJyZEZFelpIRmhNMUpvVmpGb00yTkhjR3hpYlZKdVVXdE9iMUZWZEVSa01qbExaRE5PYlZsWWFHNWhNRkpFVTJwU1EwOUhiekJSVlU1dVRUQk9VVm95T1VwaFNGcHdWMGhPZDA0eWRITk1XR1JTVVRKb1FsTXdUak5pTUhBell6SmFhR1ZIWkhKU1JVNUxUa1ZKTkdGcVVrSlJNbU16VVRGQ2JtTXdiR1pQVldSS1RXa3hUV1ZFVWtwaVdFSkNWVmM1VWxFeVpIcFRNRTVxVkVWbmVXTXhiRXRSV0dSd1dsVkdiVk5UTVVKUlZ6bFFaREp2TUZSRlRrcE9iVVp2VEZWMGMyTnVVVEpSVkU1Q1VsVjBSbEZYT1UxUk1tUjFVVE5uTldOclpFUlZWVEZLWW0xa1NXVldRbTVSVlhSRldUQnJkRkV5WkhCVVZGcE9ZVlpSTWxOV2FGZE1WbEpPVXpCV1FtSXdlRVJhTWpWRVpVUnNlVkl3VGxKVVZXeDFXakJvTlZWSFpFSlRNRko2VTFNeFJHUXljR0ZoUkdoVlRqTmFNbFl5VGpGYVZGSkRVVEpvUWxNd1RqTmlNSEF6WXpKYWFHVkhaSEpTUlU1TFRrVkpOR0ZxVWtKUk1tTjZVVEZDYm1Jd2JETlhiVnB4WlZkT01WRjZWakZVV0ZaRVlVVkdURkV6WkhaVGJtUjZXbTFHTkZveWRFVlJNRzh3VVdwb2NVNUZSa1JhZW1SRVZVZGtlbE5YY0daVk0wNDBUMFpDYmxwNlVtaGlWVVpTWWpGR1JGb3pUa3hSTWs1TlUwUktlbGRWY0VKa01teHNVVmRhU2t4VlJrSmlNRFV6WVdwU1RGRXdPVlZPVjJSNFV6SlNlbU5HVFhkV2JtUjJWVlZPYm1Nd2RFUlpNSGhKVFc1T1dsTnJSak5oVjFaQ1dtdHJkRkZWUm5aVU0yUnhUa1Y0UkZScmFISmtWVGsxVVcwMWExVkhjelJSVlZaTVVsVkdkbFJGVG01aWEwNDBUMWhLU0ZFeFJrNVRWelZ1VTBoc1VWb3dSa3hTU0U1S1RGVk9NMkZWV25aVVJFNUlZVVJrU0ZvelRUQk9SVXBFWVVWR1RGRXpaSFpUYm1SNldtMUdORm95ZEVWUk1HOHdVV3BvY1U1RlJrUmFlbVJFVlVka2VsTlhiR2hYUkZaNVRqSndhbUpGY0dsWGEwWlNZakZHUkZvelRreFJNazVOVTBSS2VsZFZjRUprTW14c1VWZGFTa3hWUmtKaU1Ea3pZV3BTVFZFeFFteGlNbk14VWtod2NHTlhOSGxZTVVaR1V6QldRbUl3ZUVSYU1qVkVaVVJzZVZJd1RsSlVWV3gxV2pCb05WVkhaRUpUTUZKNlUxTXhSR1F5Y0ROaWFsSm9WWHBLVGxReVNYcFBTRTVEVVRKb1FsTXdUak5pTUhBell6SmFhR1ZIWkhKU1JVNUxUa1ZKTkdGcVVrSlJNbU16VVRGQ2JtTXdiREZpTWpFd1QxaGFTRmRxUW14WFJrNUNWVmM1VWxFeVpIcFRNRTVxVkVWbmVXTXhiRXRSV0dSd1dsVkdiVk5UTVVKUlZ6bFFaREp2TUZSRlRrOWhWVnBtVkVkR1JrNHlVbFZsUnpFelVsWk9TRm93UmtOUlYyUlNVbXRLYmxvd2RFUmtNMlJRVWxWS1NsWlZXbTlhTWtaSlVXcFNibE5YYkZKaVZYUkVZak5PU0ZveFJrcFJWMmhDVWtWa2JsVlZiRU5oUlVaSlVqSmtVbE5WVGtOUlZYQklXakZHU2xKRlNrSlVhMlJ1VlZWc1JXRkZSbEZTTW1SU1UxVldRMUZXU2toYU1VWktVbGRvUWxaRlpHNVZWV3hIVVd0R1YxSXlaRkpUVlZwdlVWWm9TRm94UmtwU01FcENWMnRrYmxWVmJFaGhSVVpwVWpKa1VsTlZhRU5SVjFKSVdqRkdTbE5IYUVKYWEyUnVWVlZzU2xGclJtOVNNbVJTVTFWc2IxRlhjRWhhTVVaS1UydEtRbUpGWkc1VlZXeExZVVZHZFZJeVpGSlRWWFJEVVZoQ1NGb3hSa3BUTW1oQ1kydGtibFZWYkUxUmEwWXc2QUVFbWdJYVluSnZkM05sTFdabFpXUkdSWGRvWVhSZmRHOWZkMkYwWTJnJTNEJiYmQ2d0SlZEQndha1l4WmpWMGR5aVQzSXV0QmpJS0NnSlZVeElFR2dBZ1ZRJTNEJTNE'
		};
		resolve({ data: mockData });
	});
};

const getSearchMockData = () => {
	return new Promise((resolve) => {
		const mockData = {
			contents: [
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@freecodecamp',
							channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
							title: 'freeCodeCamp.org'
						},
						badges: ['CC'],
						descriptionSnippet:
							"This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a ...",
						isLiveNow: false,
						lengthSeconds: 16012,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/rfscVS0vtbw/mqdefault_6s.webp?du=3000&sqp=CKzti60G&rs=AOn4CLAHT9Enz3KWoZJh1D-hrMxP9YXf5g',
								width: 320
							}
						],
						publishedTimeText: '5 years ago',
						stats: {
							views: 42916927
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-9-7sK2ChwTaU2oDci15jO7wEDg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/rfscVS0vtbw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABBQtpk83-Gm8-IgPAiGlTtrLH9w',
								width: 720
							}
						],
						title: 'Learn Python - Full Course for Beginners [Tutorial]',
						videoId: 'rfscVS0vtbw'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@programmingwithmosh',
							channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
							title: 'Programming with Mosh'
						},
						badges: ['CC'],
						descriptionSnippet:
							'Python tutorial - Python full course for beginners - Go from Zero to Hero with Python (includes machine learning & web ...',
						isLiveNow: false,
						lengthSeconds: 22447,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/_uQrJ0TkZlc/mqdefault_6s.webp?du=3000&sqp=CICCjK0G&rs=AOn4CLAtnyxtYj3ZBxIBPwwmbxvaMS_E9w',
								width: 320
							}
						],
						publishedTimeText: '4 years ago',
						stats: {
							views: 37107602
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCQfkbApoaN-_QBOuiyHzWJOiziEA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpUFKfUMVNbg8mqTcZ8UdSUjpilw',
								width: 720
							}
						],
						title: 'Python Tutorial - Python Full Course for Beginners',
						videoId: '_uQrJ0TkZlc'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@freecodecamp',
							channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
							title: 'freeCodeCamp.org'
						},
						badges: ['4K'],
						descriptionSnippet:
							'Learn Python programming from Harvard University. It dives more deeply into the design and implementation of web apps with ...',
						isLiveNow: false,
						lengthSeconds: 57468,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/nLRL_NcnK-4/mqdefault_6s.webp?du=3000&sqp=CNr9i60G&rs=AOn4CLARNTThtIsEU5aOL0bvccJ9lX_QnQ',
								width: 320
							}
						],
						publishedTimeText: '8 months ago',
						stats: {
							views: 3223473
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/nLRL_NcnK-4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJas_Ng-a8m7MaZy4pFXEtg32wrg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/nLRL_NcnK-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5lx7Ejw4EXmM_Vlc1_bZ3RLKQ7g',
								width: 720
							}
						],
						title:
							'Harvard CS50’s Introduction to Programming with Python – Full University Course',
						videoId: 'nLRL_NcnK-4'
					}
				},
				{
					playlist: {
						author: {
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@Telusko',
							channelId: 'UC59K-uG2A5ogwIrHw4bmlEg',
							title: 'Telusko · Playlist'
						},
						playlistId: 'PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3',
						stats: {
							videos: 110
						},
						thumbnails: [
							{
								height: 94,
								url: 'https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLADTlU-Zp91LJN1n_JYo4EWYaBZHg',
								width: 168
							},
							{
								height: 110,
								url: 'https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDi0NZYUUqmiPH_lcIc-aLedxVjMA',
								width: 196
							},
							{
								height: 138,
								url: 'https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBBpA479qTBzEaAOn3crVRy7y36Rw',
								width: 246
							},
							{
								height: 188,
								url: 'https://i.ytimg.com/vi/QXeEoD0pB3E/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDFfxTTv31qjpdalu6WVYgDswHgcg',
								width: 336
							}
						],
						title: 'Python for Beginners (Full Course) | Programming Tutorial',
						updatedTime: null,
						updatedTimeText: null
					},
					type: 'playlist'
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZRfMa6f-gT7vm5yNsNxyzfRy8524MBRE8KnIuolbQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@BroCodez',
							channelId: 'UC4SVo0Ue36XCfOyb5Lh1viQ',
							title: 'Bro Code'
						},
						badges: [],
						descriptionSnippet:
							'Python tutorial for beginners full course #python #tutorial #beginners ⭐️Time Stamps⭐️ #1 (00:00:00)​ Python tutorial for ...',
						isLiveNow: false,
						lengthSeconds: 43200,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/XKHEtdqhLK8/mqdefault_6s.webp?du=3000&sqp=CJP7i60G&rs=AOn4CLBBpUZhOcc6SrXnwbchn3_aslKzdw',
								width: 320
							}
						],
						publishedTimeText: '2 years ago',
						stats: {
							views: 15049907
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/XKHEtdqhLK8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBae20jEWLVRS7V81SCWosPrpdH9A',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/XKHEtdqhLK8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwiaYg15KmdfuYUhMbmDWXAoam8Q',
								width: 720
							}
						],
						title: 'Python Full Course for free 🐍',
						videoId: 'XKHEtdqhLK8'
					}
				},
				{
					channel: {
						avatar: [
							{
								height: 88,
								url: 'https://yt3.googleusercontent.com/ytc/AIf8zZS0BH5X317JJ0dcN3cClrgf5EbcPCjmEOQtFQahxg=s88-c-k-c0x00ffffff-no-rj-mo',
								width: 88
							},
							{
								height: 176,
								url: 'https://yt3.googleusercontent.com/ytc/AIf8zZS0BH5X317JJ0dcN3cClrgf5EbcPCjmEOQtFQahxg=s176-c-k-c0x00ffffff-no-rj-mo',
								width: 176
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@gilesmcmullen',
						channelId: 'UC68KSmHePPePCjW4v57VPQg',
						descriptionSnippet:
							"Hi, I'm Giles McMullen-Klein. My degree was in physics. I've been using python as a scientist for years. I learnt to code whilst ...",
						stats: {
							subscribers: 416000,
							subscribersText: '416K subscribers'
						},
						title: 'Python Programmer',
						username: '@gilesmcmullen'
					},
					type: 'channel'
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZQRUc1SQG00SjsLEPdnh8FB7leXgXZQSACJnUxw=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@adriansdigitalbasement',
							channelId: 'UCE5dIscvDxrb7CD5uiJJOiw',
							title: "Adrian's Digital Basement"
						},
						badges: ['New'],
						descriptionSnippet:
							"I've had this Samsung S5200 laptop kicking around the basement for a year or two now and I've always been so curious to know ...",
						isLiveNow: false,
						lengthSeconds: 2973,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/Zbu4Mhdm6EA/mqdefault_6s.webp?du=3000&sqp=CPDzi60G&rs=AOn4CLBZzqDmSGV07sefnwcqCA453yc4DQ',
								width: 320
							}
						],
						publishedTimeText: '4 hours ago',
						stats: {
							views: 14304
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/Zbu4Mhdm6EA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5EoeJMAlL0RqbQJx9Jo9PWmOsSA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/Zbu4Mhdm6EA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCsTIe6gQU-8MD60SvrN_DU-7qlw',
								width: 720
							}
						],
						title:
							'Does this dead "laptop" have a gas plasma display? Let\'s try to revive it to find out! Samsung S5200',
						videoId: 'Zbu4Mhdm6EA'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTM49hEx9zyui_0zDZKi75EgqJPJfuDmWu1cePdQQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@MrBeast',
							channelId: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
							title: 'MrBeast'
						},
						badges: ['New', 'CC'],
						descriptionSnippet:
							'He spent so much money lol Grow your money with the Mighty Oak debit card from Acorns. Sign up at ...',
						isLiveNow: false,
						lengthSeconds: 968,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/7ESeQBeikKs/mqdefault_6s.webp?du=3000&sqp=CMzni60G&rs=AOn4CLByaa16dExKw9t7LPSEYnKyAQt5aw',
								width: 320
							}
						],
						publishedTimeText: '4 hours ago',
						stats: {
							views: 12609688
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/7ESeQBeikKs/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhcIGUoTTAP&rs=AOn4CLC1N94HHQVxfcRhz49Fge_9eDKyog',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/7ESeQBeikKs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhcIGUoTTAP&rs=AOn4CLBTm40YBUlJsxf3Ji_BWgsT4QRpow',
								width: 720
							}
						],
						title: 'Protect $500,000 Keep It!',
						videoId: '7ESeQBeikKs'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/Wnl2-7CXkDdt2ZRbe7TLED7K7s8WNYvLBOrh-y_iwglm4hT2CGHCfAwAaRT2EVFhBFrPCvk_Lg=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@wildlifeworld6705',
							channelId: 'UCKRE3w5ci-zJShcIkXojoXw',
							title: 'Wildlife World'
						},
						badges: [],
						descriptionSnippet:
							'End to Bigotry! Python Pains When Tortured By Hundreds Of Porcupine Thorns For Trying To Eat It Welcome to Wildlife World.',
						isLiveNow: false,
						lengthSeconds: 664,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/CBjqBvPq_p4/mqdefault_6s.webp?du=3000&sqp=CKbti60G&rs=AOn4CLBZtcj6aO9sF-YSsP2jlf2A65Ef4A',
								width: 320
							}
						],
						publishedTimeText: '3 months ago',
						stats: {
							views: 700994
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/CBjqBvPq_p4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhGm-zqVowl5gDN9vTM3ySfH88Gg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/CBjqBvPq_p4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAflMYUs0SaSp-qFtzpmlyJtDzr9Q',
								width: 720
							}
						],
						title:
							'End to Bigotry! Python Pains When Tortured By Hundreds Of Porcupine Thorns For Trying To Eat It',
						videoId: 'CBjqBvPq_p4'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTZJ5Wnqp3BGcRTFvwy2SqJhZKNEaYVrHrFMfea=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@mCoding',
							channelId: 'UCaiL2GDNpLYH6Wokkk1VNcg',
							title: 'mCoding'
						},
						badges: ['CC'],
						descriptionSnippet:
							'Nooby Python habits give away your inexperience. Improve your code and your prestige just a bit by ditching those habits and ...',
						isLiveNow: false,
						lengthSeconds: 552,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/qUeud6DvOWI/mqdefault_6s.webp?du=3000&sqp=COTii60G&rs=AOn4CLBPK5LCUQq5zuCwjGFT5aqFqa0ecw',
								width: 320
							}
						],
						publishedTimeText: '2 years ago',
						stats: {
							views: 1607524
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/qUeud6DvOWI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQoZrmm1Sojra8ADjJ6_Z_Qr6uHg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/qUeud6DvOWI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3NyQRWqhxmKe8kgY71h7fxO98FQ',
								width: 720
							}
						],
						title: '25 nooby Python habits you need to ditch',
						videoId: 'qUeud6DvOWI'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZSURqBsy7QPC2m8hfclHXVXPP2F8R6pGw0nUsOvTg=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@SampsonBoatCo',
							channelId: 'UCg-_lYeV8hBnDSay7nmphUA',
							title: 'Sampson Boat Co'
						},
						badges: ['New', '4K'],
						descriptionSnippet:
							'Support TALLY HO; http://www.sampsonboat.co.uk/support Become a Patron; http://www.patreon.com/sampsonboatco TALLY HO ...',
						isLiveNow: false,
						lengthSeconds: 1026,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/0FHSThoR3Ec/mqdefault_6s.webp?du=3000&sqp=CJ-KjK0G&rs=AOn4CLBKWkbYfox52RliABTXFfAwSu7AMg',
								width: 320
							}
						],
						publishedTimeText: '2 hours ago',
						stats: {
							views: 49942
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/0FHSThoR3Ec/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCE12Mreq0zfWRHYBkk0UN-Wur-w',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/0FHSThoR3Ec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCp8wOScObj4Fq_FGyWeci2lFo6aQ',
								width: 720
							}
						],
						title: 'The Chart Table and Navigation area!',
						videoId: '0FHSThoR3Ec'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/bGBYK7fGZp_K6iqaeC5sjZ012x5TGk6c1GjFoiKHlivZ6OytLRI0zW3m1NB9ioW-iCJDumU3=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@MMAWORLD',
							channelId: 'UClkruV5L-hsu20MDYOa1hvw',
							title: 'MMA WORLD'
						},
						badges: ['New'],
						descriptionSnippet:
							'Sign up for ESPN+ and watch ANKALAEV VS WALKER 2 THIS Saturday!, https://go.web.plus.espn.com/c/1347894/566982/9070 ...',
						isLiveNow: false,
						lengthSeconds: 676,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/ik0WcabWPuY/mqdefault_6s.webp?du=3000&sqp=COzfi60G&rs=AOn4CLASjQL8JilXbkvYwHvkFoyn_OUnfw',
								width: 320
							}
						],
						publishedTimeText: '5 hours ago',
						stats: {
							views: 36768
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/ik0WcabWPuY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWVX7mK8Mv9IMnORq9f-B8_-pxcQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/ik0WcabWPuY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAf6WcpfywFU46DSAQvW7gKEAgA6g',
								width: 720
							}
						],
						title:
							"Dana White announces NEW UFC 300 Fight,Fighter Misses Weight and fight called off,Shavkat's a BEAST",
						videoId: 'ik0WcabWPuY'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZSMHRGJ_k0xr2vzFkgWfvvEaCFGDtlecYHQgbmU2A=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@LuckyDuckDecoys',
							channelId: 'UC7mPBLTY_sJdha1AcEuKVWQ',
							title: 'Lucky Duck'
						},
						badges: ['New', '4K'],
						descriptionSnippet:
							'Florida is the epicenter of invasive species in the United States. The task of removing these invasive species is not for the faint of ...',
						isLiveNow: false,
						lengthSeconds: 1075,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/_-AiZ4-W7kI/mqdefault_6s.webp?du=3000&sqp=CMjji60G&rs=AOn4CLAKyZghVt0urknIXrbi81IhmwReUA',
								width: 320
							}
						],
						publishedTimeText: '3 days ago',
						stats: {
							views: 24993
						},
						thumbnails: [
							{
								height: 270,
								url: 'https://i.ytimg.com/vi/_-AiZ4-W7kI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCveMAtUbfoGGXP_l2XPGWbMUcwug',
								width: 480
							}
						],
						title: 'Lucky Duck Presents: The Python Cowboy & A Dog Named Otto',
						videoId: '_-AiZ4-W7kI'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZRhXM-BZvBXFSECPoGpSsvZd1urH6q2dfJcqBybtA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@GamerMeld',
							channelId: 'UCkK4Tzb9ieuAhcyWUZnLBBQ',
							title: 'Gamer Meld'
						},
						badges: ['New'],
						descriptionSnippet:
							'The first 500 people to use this link and code GAMERMELD30 will get 30% off their first subscription with Soylent: ...',
						isLiveNow: false,
						lengthSeconds: 478,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/fD6W18Yc6yY/mqdefault_6s.webp?du=3000&sqp=CIr7i60G&rs=AOn4CLDwqrxmWz7lmt19boGeXYJzu_V0MA',
								width: 320
							}
						],
						publishedTimeText: '22 hours ago',
						stats: {
							views: 50838
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/fD6W18Yc6yY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBcoeTTgLqKraiWgzj9QOou2mD6Xw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/fD6W18Yc6yY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTSFFXffBL3SyAsS3V3m0W-SBQUQ',
								width: 720
							}
						],
						title: 'They’re ACTUALLY BETTER Than What AMD Said!',
						videoId: 'fD6W18Yc6yY'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTBFP0zuuMB1UeprXDNSNDYm4KfBb7NLytO99pihA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@seandaniel23',
							channelId: 'UCzZCiVjRPPDCpP5l7HIGRtA',
							title: 'Sean Daniel'
						},
						badges: ['New'],
						descriptionSnippet:
							'Talking about easy ways you can play songs efficiently. Thanks to @ElixirStringsMedia for sponsoring the video. Get yourself a set ...',
						isLiveNow: false,
						lengthSeconds: 822,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/eeF5acT1dLw/mqdefault_6s.webp?du=3000&sqp=COz9i60G&rs=AOn4CLCz4VAkgw2fS3VpU5fda8oi5r2oyw',
								width: 320
							}
						],
						publishedTimeText: '3 hours ago',
						stats: {
							views: 1177
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/eeF5acT1dLw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAejZodUO5vTpUOImu7FD0jQwHeNw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/eeF5acT1dLw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8duxQ1bDX7amKFnhk2FgLpkezuQ',
								width: 720
							}
						],
						title: "This is Why You Can't Play Songs",
						videoId: 'eeF5acT1dLw'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZRJtrXuzvjZ0Rk4JK2qzi-x3IW7BQ4IauUxqIq2AfU=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@KevinStratvert',
							channelId: 'UCfJT_eYDTmDE-ovKaxVE1ig',
							title: 'Kevin Stratvert'
						},
						badges: ['4K', 'CC'],
						descriptionSnippet:
							'In this step-by-step Python for beginners tutorial, learn how you can get started programming in Python. In this video, I assume that ...',
						isLiveNow: false,
						lengthSeconds: 3801,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/b093aqAZiPU/mqdefault_6s.webp?du=3000&sqp=COb0i60G&rs=AOn4CLCv1idda_HfDXAc5s5U6y6Qk7_suQ',
								width: 320
							}
						],
						publishedTimeText: '2 years ago',
						stats: {
							views: 2507488
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/b093aqAZiPU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMc52n3VeviTzlhsRCemDDz8l1Ow',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/b093aqAZiPU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG6MYAXELGegdhLlZJPKwwLierDA',
								width: 720
							}
						],
						title: '👩‍💻 Python for Beginners Tutorial',
						videoId: 'b093aqAZiPU'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@programmingwithmosh',
							channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
							title: 'Programming with Mosh'
						},
						badges: [],
						descriptionSnippet:
							'#Python, #MachineLearning, #WebDevelopment Python Exercises for Beginners: https://goo.gl/1XnQB1 ⭐ My Favorite Python ...',
						isLiveNow: false,
						lengthSeconds: 3606,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/kqtD5dpn9C8/mqdefault_6s.webp?du=3000&sqp=CM7ui60G&rs=AOn4CLAvUBcU20eNfH29BVGWpCYT4LWrrQ',
								width: 320
							}
						],
						publishedTimeText: '3 years ago',
						stats: {
							views: 15155346
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/kqtD5dpn9C8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1iLVjsmE_gK2uZS887LgyThzx4Q',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/kqtD5dpn9C8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoYD4sT1l-1w5fEUQt6pdtsKdfLQ',
								width: 720
							}
						],
						title: 'Python for Beginners - Learn Python in 1 Hour',
						videoId: 'kqtD5dpn9C8'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTUVa5AeFd3m5-4fdY2hEaKof3Byp8VruZ0f0FNEA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@Fireship',
							channelId: 'UCsBjURrPoezykLs9EqgamOA',
							title: 'Fireship'
						},
						badges: ['4K'],
						descriptionSnippet:
							'#python #programming #100SecondsOfCode Resources Python Docs https://docs.python.org/3/ Python TIOBE Ranking ...',
						isLiveNow: false,
						lengthSeconds: 144,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/x7X9w_GIm1s/mqdefault_6s.webp?du=3000&sqp=CPHyi60G&rs=AOn4CLAsb9a_5pit6GOKtzt6vw5jdToVcA',
								width: 320
							}
						],
						publishedTimeText: '2 years ago',
						stats: {
							views: 2264903
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/x7X9w_GIm1s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-UU8u08loH5ReelPhYnA_T126Ug',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/x7X9w_GIm1s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVbgV-ihxqr1-ZcRUevMugF7X60A',
								width: 720
							}
						],
						title: 'Python in 100 Seconds',
						videoId: 'x7X9w_GIm1s'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/kXyR8Aa32KXnZWVdkAFUYK5utM752kSJPHGtYiJ4ev6BmdFHi-dl1EFbI3TogmHBjszwc7m2=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@TechWorldwithNana',
							channelId: 'UCdngmbVKX1Tgre699-XLlUA',
							title: 'TechWorld with Nana'
						},
						badges: [],
						descriptionSnippet:
							"Python Tutorial for Beginners | Full Python Course | Learn Python in 2023 The Ultimate IT Beginner's Course: ...",
						isLiveNow: false,
						lengthSeconds: 19890,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/t8pPdKYpowI/mqdefault_6s.webp?du=3000&sqp=CMrfi60G&rs=AOn4CLDW_ktxdXCkmDZDvPl49gl1fKCqCg',
								width: 320
							}
						],
						publishedTimeText: '2 years ago',
						stats: {
							views: 5165090
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/t8pPdKYpowI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBBWEVe-XMQgtxlBNiti-4F1tlPw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/t8pPdKYpowI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAg-ArVjF42XbZm4NPk1fzdVFGxrA',
								width: 720
							}
						],
						title: 'Python Tutorial for Beginners - Learn Python in 5 Hours [FULL COURSE]',
						videoId: 't8pPdKYpowI'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/XCrBBAMNF2JLmu2UIMGxDV6nzclwfcnOvsHfkit2mG2rbD07QlR4XClZg5RP2zoaovP4mKfMZA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@CodingWithLewis',
							channelId: 'UCWI-ohtRu8eEeDj93hmUsUQ',
							title: 'Coding with Lewis'
						},
						badges: ['New'],
						descriptionSnippet:
							'... much faster with things like biome or Turbo pack I think python will have its typescript moment where the community will develop ...',
						isLiveNow: false,
						lengthSeconds: 60,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/v8D6I9pO7so/mqdefault_6s.webp?du=3000&sqp=CMD1i60G&rs=AOn4CLDRWoCFKj6bgqS00AhJIzGvJL68pQ',
								width: 320
							}
						],
						publishedTimeText: '1 day ago',
						stats: {
							views: 53840
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/v8D6I9pO7so/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhMIE0oZTAP&rs=AOn4CLA9oWu9-QWow36LiGUm7xpA4z-5SA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/v8D6I9pO7so/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhMIE0oZTAP&rs=AOn4CLDKwcERXwYrERa6_BY2ZZhhXQhnxQ',
								width: 720
							}
						],
						title:
							'My 2024 Programming Predictions 👩‍💻 #tech #developer #coding #software #python #code #javascript',
						videoId: 'v8D6I9pO7so'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/RmnGV9H9GvZnUA842JOHY2Olmup7m6pOmUXMCynyYkjRLc8O1qHkPimIKVdsRStgDm2f1-3g4A=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@MurliwaleHauslaShortsYT',
							channelId: 'UCb8EnKZ6SY7Kpj0PJFSPvVw',
							title: 'Murliwale Hausla Shorts '
						},
						badges: [],
						descriptionSnippet: null,
						isLiveNow: false,
						lengthSeconds: 61,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/KfrwyBiRmuc/mqdefault_6s.webp?du=3000&sqp=CMz2i60G&rs=AOn4CLBKEcldTdYvdQhFLqLsURC3bZBYmQ',
								width: 320
							}
						],
						publishedTimeText: '1 month ago',
						stats: {
							views: 1041815
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/KfrwyBiRmuc/hq720.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhMIE4oZTAP&rs=AOn4CLDvavk9eztTXkp7MXdG9v9-nKTLPw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/KfrwyBiRmuc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBzgWAAoAKigIMCAAQARhMIE4oZTAP&rs=AOn4CLC_N6mS8RCYIetdKEDMCzoa19N71A',
								width: 720
							}
						],
						title: 'Rock Python Rescue in India',
						videoId: 'KfrwyBiRmuc'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZSJnhJ-yclPL8JTB962usaZciap0C3pMIfJb9TuuuA=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@SundasKhalid',
							channelId: 'UCteRPiisgIoHtMgqHegpWAQ',
							title: 'Sundas Khalid'
						},
						badges: ['4K'],
						descriptionSnippet:
							'In this video, I am sharing framework and tips to learn any coding language FAST with ChatGPT in 2024. This video is focused on ...',
						isLiveNow: false,
						lengthSeconds: 650,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/LdXfe9-yJVY/mqdefault_6s.webp?du=3000&sqp=CJDqi60G&rs=AOn4CLBzp-xEkjoYL-7UA8tEaI-TmFDsEw',
								width: 320
							}
						],
						publishedTimeText: '2 weeks ago',
						stats: {
							views: 15178
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/LdXfe9-yJVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbFHDAvaKUBfIgZBROGaZMWhpdsQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/LdXfe9-yJVY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALnPrs-XEx805aiIRqAE-VfXZyeQ',
								width: 720
							}
						],
						title: 'How to Learn Python FAST with ChatGPT in 2024?',
						videoId: 'LdXfe9-yJVY'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/EOr7hyiYXO1LY_ZIT20XBss57JJG0DxQqTeefzydvX92XmTYvGUE5ZUn0Uy9eUGJRvO909D27Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@TrickyMan',
							channelId: 'UCBm0hPI-ykEloE6c8Tf15Vw',
							title: 'Tricky Man'
						},
						badges: [],
						descriptionSnippet:
							'ISRO Launched Free Python Certification Course in 2024 | Learn From Experts | GISS & Python Course | GeoProcessing using ...',
						isLiveNow: false,
						lengthSeconds: 547,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/FignSVMh1ik/mqdefault_6s.webp?du=3000&sqp=CKnWi60G&rs=AOn4CLD9O7WaXlHu3l5lbCWtUBUDXJzD3A',
								width: 320
							}
						],
						publishedTimeText: '9 days ago',
						stats: {
							views: 24604
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/FignSVMh1ik/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCvFSR-zGeNMcI9oieq_ZAvQk4eeA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/FignSVMh1ik/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBVhSfT6aBk5B2v6y6xqnsOgrQNOQ',
								width: 720
							}
						],
						title:
							'ISRO Launched Free Python Certification Course in 2024 | Learn From Experts | GISS & Python Course',
						videoId: 'FignSVMh1ik'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/Youvw32wKJ5n4OJv3IXESEtEZnPdF49rXnpxKeLCpXB0yM3oda0ICnTGff00pWi1ZZm90x6AXw=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@Indently',
							channelId: 'UCuudpdbKmQWq2PPzYgVCWlA',
							title: 'Indently'
						},
						badges: ['4K'],
						descriptionSnippet:
							"This is honestly probably the craziest syntax I've ever used in Python to achieve something like this. What do you think about it?",
						isLiveNow: false,
						lengthSeconds: 559,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/Q_i2xsJZyWE/mqdefault_6s.webp?du=3000&sqp=CKuGjK0G&rs=AOn4CLCndn2HqRUxJNSHRFWhPym5x0yn1A',
								width: 320
							}
						],
						publishedTimeText: '3 weeks ago',
						stats: {
							views: 36122
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/Q_i2xsJZyWE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7iBMYfkuP5O9hnIfOg8U_Plph1Q',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/Q_i2xsJZyWE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxaR0drL-lIsz-uPGHNTOxzxdgsw',
								width: 720
							}
						],
						title: "I Didn't Know Python Allowed THIS Syntax",
						videoId: 'Q_i2xsJZyWE'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/mUAVlzjzD4g581jDzS5Hkn6dnuFz1BeCZMQVomvZDiKN2o6MpdO4DbFq88k1coYjOHDmdypH5Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@NeuralNine',
							channelId: 'UC8wZnXYK_CGKlBcZp-GxYPA',
							title: 'NeuralNine'
						},
						badges: ['New'],
						descriptionSnippet:
							'Today we learn how to do memory profiling in Python. ◾◾◾◾◾◾◾◾◾◾◾◾◾◾◾◾◾ Programming Books & Merch ...',
						isLiveNow: false,
						lengthSeconds: 427,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/3PdmLQIZpwE/mqdefault_6s.webp?du=3000&sqp=CJ3_i60G&rs=AOn4CLAl4eK-QYt9td4dZMz2EfO3FamXsw',
								width: 320
							}
						],
						publishedTimeText: '6 days ago',
						stats: {
							views: 4913
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/3PdmLQIZpwE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPrnKepMgCmobQY8ls8-gOopAflg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/3PdmLQIZpwE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBveBwBaBSx-mjDiXSFeFSrkUr4ew',
								width: 720
							}
						],
						title: 'Memory Profiling in Python',
						videoId: '3PdmLQIZpwE'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/mUAVlzjzD4g581jDzS5Hkn6dnuFz1BeCZMQVomvZDiKN2o6MpdO4DbFq88k1coYjOHDmdypH5Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@NeuralNine',
							channelId: 'UC8wZnXYK_CGKlBcZp-GxYPA',
							title: 'NeuralNine'
						},
						badges: [],
						descriptionSnippet:
							'In this video today, we learn how to do argument parsing for command line applications in Python.',
						isLiveNow: false,
						lengthSeconds: 687,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/88pl8TuuKz0/mqdefault_6s.webp?du=3000&sqp=CMPji60G&rs=AOn4CLAwT-RtXonE620B_VTbA8tTsV5LJQ',
								width: 320
							}
						],
						publishedTimeText: '1 month ago',
						stats: {
							views: 5939
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/88pl8TuuKz0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrJYV4cHgyHW_Yg1HbjtaVIqjyCw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/88pl8TuuKz0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaD9rfbSfbsQxdGUsymBciy7_2bg',
								width: 720
							}
						],
						title: 'Argument Parsing with argparse in Python',
						videoId: '88pl8TuuKz0'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTbsFGDgou97uINBl5fGrF2mhl4zLutCG9Ut__B=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [],
							canonicalBaseUrl: '/@CodigoCEO',
							channelId: 'UC7ThoLd1glD_04jWCdEl_ig',
							title: 'Código CEO'
						},
						badges: ['New'],
						descriptionSnippet:
							'Trabalhar com programação freelancer é uma arte e isso está atrelado a vários fatores, principalmente se você quer se um ...',
						isLiveNow: false,
						lengthSeconds: 639,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/-IAm9d5kJW8/mqdefault_6s.webp?du=3000&sqp=CI_8i60G&rs=AOn4CLAhc0YsxCQJKsYvMkzxma8BwBxJCw',
								width: 320
							}
						],
						publishedTimeText: '1 day ago',
						stats: {
							views: 2610
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/-IAm9d5kJW8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDdLXVdo1AMWLpLD9fXM104WLmkw',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/-IAm9d5kJW8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQcr6-OYUkinYKP8e-xxfYHuRPVA',
								width: 720
							}
						],
						title: 'PROGRAMADOR FREELANCER PYTHON: VALE APENA? 😖',
						videoId: '-IAm9d5kJW8'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/wSP9oyZvYH-3SuKfozau1CnYbJiHt_1Le_94KATK4fJwNojRWKf0JIc2s709MJDhBKAvlWvGng=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@thesun',
							channelId: 'UCIzXayRP7-P0ANpq-nD-h5g',
							title: 'The Sun'
						},
						badges: ['New'],
						descriptionSnippet:
							'A five-foot carpet python struggled to pull a possum into a tree in a suburban backyard in Buderim, Queensland, as a professional ...',
						isLiveNow: false,
						lengthSeconds: 60,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/ufpBTSAE9L0/mqdefault_6s.webp?du=3000&sqp=CLeJjK0G&rs=AOn4CLC-ppXgYuUDhaJ_Gx8_PRNXpdQMaA',
								width: 320
							}
						],
						publishedTimeText: '5 days ago',
						stats: {
							views: 9944
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/ufpBTSAE9L0/hq720_2.jpg?sqp=-oaymwE2COgCEMoBSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhWIGUoUzAP&rs=AOn4CLB7uFhb36SQZwoiV6pfBMIexeEyxA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/ufpBTSAE9L0/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhWIGUoUzAP&rs=AOn4CLDOe4KHi_OhbP6p03aO-aM0u0u_AA',
								width: 720
							}
						],
						title: 'Python filmed dragging possum prey up tree in Australia #shorts',
						videoId: 'ufpBTSAE9L0'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@freecodecamp',
							channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
							title: 'freeCodeCamp.org'
						},
						badges: ['CC'],
						descriptionSnippet:
							'Learn Python programming in this complete course for beginners. This tutorial features mini-projects throughout so you can put ...',
						isLiveNow: false,
						lengthSeconds: 31314,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/qwAFL1597eM/mqdefault_6s.webp?du=3000&sqp=CKHRi60G&rs=AOn4CLBPwEw5pzzdt6sX9aAH9Rip3bzcpw',
								width: 320
							}
						],
						publishedTimeText: '3 months ago',
						stats: {
							views: 315700
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/qwAFL1597eM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_lbg1Ao7J3YOhbR9iTvl47IedjQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/qwAFL1597eM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmUavieB3mNPmBC31rQigvgn-RRg',
								width: 720
							}
						],
						title: 'Python Tutorial for Beginners (with mini-projects)',
						videoId: 'qwAFL1597eM'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@freecodecamp',
							channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
							title: 'freeCodeCamp.org'
						},
						badges: ['CC'],
						descriptionSnippet:
							'This Python 3 tutorial course aims to teach everyone the basics of programming computers using Python. The course has no ...',
						isLiveNow: false,
						lengthSeconds: 49210,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/8DvywoWv6fI/mqdefault_6s.webp?du=3000&sqp=CI7bi60G&rs=AOn4CLCQbLQB-E_cZ47tSfWQhg_elT2EJQ',
								width: 320
							}
						],
						publishedTimeText: '4 years ago',
						stats: {
							views: 6550184
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/8DvywoWv6fI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBT1gdMNWmqNXqBS0nsf-_VT8q7iA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/8DvywoWv6fI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaA_OpykxUBXY04xtL0A9pe6xIrQ',
								width: 720
							}
						],
						title: 'Python for Everybody - Full University Python Course',
						videoId: '8DvywoWv6fI'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTg5CwP4xqseAoW15z6_zafurgiauJSBZCVpf430g=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@TechWithTim',
							channelId: 'UC4JX40jDee_tINbkjycV4Sg',
							title: 'Tech With Tim'
						},
						badges: ['4K', 'CC'],
						descriptionSnippet:
							"If you're interested in becoming a developer that writes any type of code in python, then you need to understand these 5 Python ...",
						isLiveNow: false,
						lengthSeconds: 1200,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/mMv6OSuitWw/mqdefault_6s.webp?du=3000&sqp=CLiHjK0G&rs=AOn4CLC23iLlW2At5YmNOmXF_4d1ULfSjA',
								width: 320
							}
						],
						publishedTimeText: '7 months ago',
						stats: {
							views: 846085
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/mMv6OSuitWw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVlZNtDOscsMvXkK0EOX1BKdCEEA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/mMv6OSuitWw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAs-1AX6cGBafn6oCzNGGADctCcvA',
								width: 720
							}
						],
						title: 'Python 101: Learn the 5 Must-Know Concepts',
						videoId: 'mMv6OSuitWw'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@freecodecamp',
							channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
							title: 'freeCodeCamp.org'
						},
						badges: ['4K'],
						descriptionSnippet:
							'Learn the Python programming language in this full course for beginners! You will learn the fundamentals of Python and code two ...',
						isLiveNow: false,
						lengthSeconds: 16800,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/eWRfhZUzrAc/mqdefault_6s.webp?du=3000&sqp=CJzgi60G&rs=AOn4CLCveWg3lRRApwcCyu6GEWmou8k8UQ',
								width: 320
							}
						],
						publishedTimeText: '1 year ago',
						stats: {
							views: 1948698
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/eWRfhZUzrAc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHniAEz378OvV3s7nIEGz3flZM_Q',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/eWRfhZUzrAc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXktI8tD4HwXjmqWILQDpiJPD1Vg',
								width: 720
							}
						],
						title: 'Python for Beginners – Full Course [Programming Tutorial]',
						videoId: 'eWRfhZUzrAc'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZRfMa6f-gT7vm5yNsNxyzfRy8524MBRE8KnIuolbQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@BroCodez',
							channelId: 'UC4SVo0Ue36XCfOyb5Lh1viQ',
							title: 'Bro Code'
						},
						badges: ['CC'],
						descriptionSnippet:
							'Java tutorial for beginners full course #Java #tutorial #beginners ⭐️Time Stamps⭐️ #1 (00:00:00) Java tutorial for beginners ...',
						isLiveNow: false,
						lengthSeconds: 43200,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/xk4_1vDrzzo/mqdefault_6s.webp?du=3000&sqp=CN6DjK0G&rs=AOn4CLBJc-SABPLaPYV4y4wNuKRBequmkg',
								width: 320
							}
						],
						publishedTimeText: '3 years ago',
						stats: {
							views: 9176524
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/xk4_1vDrzzo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1K3cuE8rUy-jUEJwwZ3yhUfFo7A',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/xk4_1vDrzzo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIGC1UnH_XVz5NaWdKYCpeXLuUYQ',
								width: 720
							}
						],
						title: 'Java Full Course for free ☕',
						videoId: 'xk4_1vDrzzo'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@programmingwithmosh',
							channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
							title: 'Programming with Mosh'
						},
						badges: ['CC'],
						descriptionSnippet:
							'⭐️ Want to learn more from me? Check out these links: Courses: https://codewithmosh.com Twitter: ...',
						isLiveNow: false,
						lengthSeconds: 2897,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/W6NZfCO5SIk/mqdefault_6s.webp?du=3000&sqp=CKaIjK0G&rs=AOn4CLCzyyritmY3txZNqZvyWfn32eeADg',
								width: 320
							}
						],
						publishedTimeText: '5 years ago',
						stats: {
							views: 11701826
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOBWmb1XE5qRd1xinBxZPfYfXoEg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/W6NZfCO5SIk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLApPe2n8hQW3A_PMdxtj7DXTHsh2w',
								width: 720
							}
						],
						title: 'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour',
						videoId: 'W6NZfCO5SIk'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@freecodecamp',
							channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
							title: 'freeCodeCamp.org'
						},
						badges: ['CC'],
						descriptionSnippet:
							'⭐️Course Contents ⭐️ ⌨️ 1. (0:00) Introduction ⌨️ 2. (1:24) Windows Installation ⌨️ 3. (4:45) Mac Installation ⌨️ 4.',
						isLiveNow: false,
						lengthSeconds: 14571,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/t_ispmWmdjY/mqdefault_6s.webp?du=3000&sqp=CIjJi60G&rs=AOn4CLDgzVjjmHTg_jdgHFuUgksWBIyz5g',
								width: 320
							}
						],
						publishedTimeText: '5 years ago',
						stats: {
							views: 1038409
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/t_ispmWmdjY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA5FKlz__Yuq1PPEW33Ryvf4kpnHA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/t_ispmWmdjY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAijKxznOzgsDG3PCnyyRHL17L9nQ',
								width: 720
							}
						],
						title: 'Ruby Programming Language - Full Course',
						videoId: 't_ispmWmdjY'
					}
				},
				{
					playlist: {
						author: {
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@coreyms',
							channelId: 'UCCezIgC97PvUuR4_gbFUs5g',
							title: 'Corey Schafer · Playlist'
						},
						playlistId: 'PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU',
						stats: {
							videos: 145
						},
						thumbnails: [
							{
								height: 94,
								url: 'https://i.ytimg.com/vi/YYXdXT2l-Gg/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAWS4mcgeSd6VIkVKpDjCjklBw7wQ',
								width: 168
							},
							{
								height: 110,
								url: 'https://i.ytimg.com/vi/YYXdXT2l-Gg/hqdefault.jpg?sqp=-oaymwEWCMQBEG5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLA8D_p2qNQoaS8nH2SC-RYUN-r8fg',
								width: 196
							},
							{
								height: 138,
								url: 'https://i.ytimg.com/vi/YYXdXT2l-Gg/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCI7t3tNj5XlxlWlpM52-p8BDmk5Q',
								width: 246
							},
							{
								height: 188,
								url: 'https://i.ytimg.com/vi/YYXdXT2l-Gg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAcdyQjBdvbNvtGQFZi1Vo_G4RZYQ',
								width: 336
							}
						],
						title: 'Python Tutorials',
						updatedTime: null,
						updatedTimeText: null
					},
					type: 'playlist'
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZSl28jRYkl3A4FVYO7T-bzQVXrEC9tft0v_DEUyMQ=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@NetworkChuck',
							channelId: 'UC9x0AN7BWHpCDHSm9NiJFJQ',
							title: 'NetworkChuck'
						},
						badges: ['4K', 'CC'],
						descriptionSnippet:
							'**Sponsored by ITProTV SUPPORT NETWORKCHUCK --------------------------------------------------- ➡️NetworkChuck membership: ...',
						isLiveNow: false,
						lengthSeconds: 1062,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/mRMmlo_Uqcs/mqdefault_6s.webp?du=3000&sqp=CLjti60G&rs=AOn4CLDMqshnH1bEx-wDANoEviQopLXWGQ',
								width: 320
							}
						],
						publishedTimeText: '2 years ago',
						stats: {
							views: 2127243
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/mRMmlo_Uqcs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFjSFxYnui85aGJkMof1-0yUE8lg',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/mRMmlo_Uqcs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF0G4hZ3rf-AHsseGtwUAW3CO78Q',
								width: 720
							}
						],
						title: 'you need to learn Python RIGHT NOW!! // EP 1',
						videoId: 'mRMmlo_Uqcs'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTDkajQxPa4sjDOW-c3er1szXkSAO-H9TiF4-8u_Q=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@freecodecamp',
							channelId: 'UC8butISFwT-Wl7EV0hUK0BQ',
							title: 'freeCodeCamp.org'
						},
						badges: ['CC'],
						descriptionSnippet:
							'Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as ...',
						isLiveNow: false,
						lengthSeconds: 21347,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/HGOBQPFzWKo/mqdefault_6s.webp?du=3000&sqp=CPLgi60G&rs=AOn4CLDQNNmgvcKiabEO7B2sDOk-zWzQUA',
								width: 320
							}
						],
						publishedTimeText: '3 years ago',
						stats: {
							views: 3432191
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDO1ErlMeIWpAGvYrWWW10l4NCAzA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/HGOBQPFzWKo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEYVC6eRlCzZ1s5pDKOnOJEWpV_A',
								width: 720
							}
						],
						title: 'Intermediate Python Programming Course',
						videoId: 'HGOBQPFzWKo'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTT2N8CajI5KidJRWVAWvh7KtwXtV-UNb1GuCI63w=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@Computerphile',
							channelId: 'UC9-y-6csu5WGm29I7JiwpnA',
							title: 'Computerphile'
						},
						badges: ['New', '4K'],
						descriptionSnippet:
							"Continuing the exploration of Regular Expressions and Automata with Professor Thorsten Altenkirch. The professor's code: ...",
						isLiveNow: false,
						lengthSeconds: 1336,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/DqabogrIVNk/mqdefault_6s.webp?du=3000&sqp=CKOHjK0G&rs=AOn4CLA_LKCfsbK5gdMgonGYOrbGRtBzaA',
								width: 320
							}
						],
						publishedTimeText: '1 day ago',
						stats: {
							views: 28033
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/DqabogrIVNk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-Tt8qKe6hz3P3MIDjIi631YUmfA',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/DqabogrIVNk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2x3AaXdZPzhUPuaP56Xe5G4cyAA',
								width: 720
							}
						],
						title: 'Python Regular Expressions - Computerphile',
						videoId: 'DqabogrIVNk'
					}
				},
				{
					type: 'video',
					video: {
						author: {
							avatar: [
								{
									height: 68,
									url: 'https://yt3.ggpht.com/ytc/AIf8zZTZPAzzZtZgHa1hNnHcdaUKHXJ4OXjCWKT6d3bIJg=s68-c-k-c0x00ffffff-no-rj',
									width: 68
								}
							],
							badges: [
								{
									text: 'Verified',
									type: 'VERIFIED_CHANNEL'
								}
							],
							canonicalBaseUrl: '/@LexClips',
							channelId: 'UCJIfeSCssxSC_Dhc5s7woww',
							title: 'Lex Clips'
						},
						badges: [],
						descriptionSnippet:
							'GUEST BIO: Guido van Rossum is the creator of Python programming language. PODCAST INFO: Podcast website: ...',
						isLiveNow: false,
						lengthSeconds: 427,
						movingThumbnails: [
							{
								height: 180,
								url: 'https://i.ytimg.com/an_webp/F2Mx-u7auUs/mqdefault_6s.webp?du=3000&sqp=CIaFjK0G&rs=AOn4CLBLibj6v4xdrj8T6JFUx0QXRIZWAQ',
								width: 320
							}
						],
						publishedTimeText: '1 year ago',
						stats: {
							views: 413492
						},
						thumbnails: [
							{
								height: 202,
								url: 'https://i.ytimg.com/vi/F2Mx-u7auUs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAH2066uUtGKh2c3PoH3Q_dSGXvLQ',
								width: 360
							},
							{
								height: 404,
								url: 'https://i.ytimg.com/vi/F2Mx-u7auUs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfSJ3_aRrcgAH2Awx7Edm8r13cFQ',
								width: 720
							}
						],
						title: 'How to learn Python programming | Guido van Rossum and Lex Fridman',
						videoId: 'F2Mx-u7auUs'
					}
				}
			]
		};
		resolve({ data: mockData });
	});
};
