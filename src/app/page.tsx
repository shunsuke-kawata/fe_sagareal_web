import './page.css'; // page.cssをインポート

let res : any = [
  {
    id: 1,
    front_cam_url: "https://picsum.photos/seed/picsum/400/300",
    back_cam_url: "https://picsum.photos/seed/picsum/400/300",
    user_uid: "ef304778ada8a6",
    delete_flag: false,
    created_at: {},
    updated_at: {}
  },
  {
    id: 2,
    front_cam_url: "https://picsum.photos/seed/picsum/400/300",
    back_cam_url: "https://picsum.photos/seed/picsum/400/300",
    user_uid: "ef304778ada8a6",
    delete_flag: false,
    created_at: {},
    updated_at: {}
  },  {
    id: 3,
    front_cam_url: "https://picsum.photos/seed/picsum/400/300",
    back_cam_url: "https://picsum.photos/seed/picsum/400/300",
    user_uid: "ef304778ada8a6",
    delete_flag: false,
    created_at: {},
    updated_at: {}
  },  {
    id: 4,
    front_cam_url: "https://picsum.photos/seed/picsum/400/300",
    back_cam_url: "https://picsum.photos/seed/picsum/400/300",
    user_uid: "ef304778ada8a6",
    delete_flag: false,
    created_at: {},
    updated_at: {}
  },
];

type Response = {
  front_cam_url: string;
  back_cam_url: string;
  user_uid: string;
};

// const searchDog = async (): Promise<Response> => {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   const res: Response = await response.json();
//   return res;
// }


export const UnitPost = ({ front_cam_url, back_cam_url, user_uid }: Response) => {
  return (
    <div className="unit-post-container">
      <p>ユーザID:{user_uid}</p>
      <img src={front_cam_url} style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}} />
      <img src={back_cam_url}  style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain"}} />
    </div>
  );
};

export const PostsList = () => {
  return (
    <div className=" flex flex-col">
      {res.map((item:any) => (
        <UnitPost key={item.id} front_cam_url={item.front_cam_url} back_cam_url={item.back_cam_url} user_uid={item.user_uid} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="page-content">
      <h1>SagaReal.</h1>
      <div className="post-button">
      <a href="./post/page.tsx">POST</a>
      </div>
      <PostsList />
    </div>
  );
}
