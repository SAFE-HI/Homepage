// import RSS from "rss";

// async function getFeedData() {
//   return "data";
// }

// export async function GET() {
//   const feed = new RSS({
//     title: "datadeveloper",
//     description: "developer blog",
//     generator: "RSS for Node and Next.js",
//     feed_url: "https://www.datacafe.kr/feed.xml",
//     site_url: "https://www.datacafe.kr",
//     copyright: `Copyright ${new Date().getFullYear().toString()}`,
//     language: "ko-KR",
//     pubDate: new Date().toUTCString(),
//     ttl: 60,
//   });

//   const allPosts = await getFeedData();

//   if (allPosts) {
//     allPosts.map((post: any) => {
//       feed.item({
//         title: post.제목,
//         description: post.내용,
//         url: post.주소,
//         date: post.등록일자,
//       });
//     });
//   }

//   return new Response(feed.xml({ indent: true }), {
//     headers: {
//       "Content-Type": "application/xml; charset=utf-8",
//     },
//   });
// }
