const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Yash%20K.%20Saini&g=yashksaini-coder&x=EasycodesDev&l=yashksaini&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F115717039%3Fs%3D400%26u%3Dd86f6a86d63432afcd2df20f13677bd9486688d8%26v%3D4&p=https%3A%2F%2Fwww.devcase.me%2Fyashksaini-coder&z=eece3";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
