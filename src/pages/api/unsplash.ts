import axios from 'axios';

interface UnsplashPhoto {
    id: string;
    urls: {
      regular: string;
    };
    alt_description: string;
    user: string;
    description: string;
    date: string;
  }
  
  export const fetchPhotos = async (query: string, perPage: number, page: number, accessKey: string) => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: `Client-ID ${accessKey}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch photos from Unsplash API');
    }
    const data = await response.json();
    return data.results as UnsplashPhoto[];
  };
  

  export const fetchPhoto = async (id: any, accessKey: string) => {
    const res = await axios.get(`https://api.unsplash.com/photos/${id}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });

    const dateString = res.data.created_at
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toDateString();

    const data: UnsplashPhoto = {
      id: res.data.id,
      urls: {
        regular: res.data.urls.regular,
      },
      alt_description: res.data.alt_description,
      user: res.data.user.name,
      description: res.data.description,
      date: formattedDate
    };
    return data;
  };
//   https://api.unsplash.com/search/photos?query=paris-photos&per_page=&page=paget5WxxhORJ7sAw_rEMQVskzTEdzMq4sLKhHWhk99FqSQ'