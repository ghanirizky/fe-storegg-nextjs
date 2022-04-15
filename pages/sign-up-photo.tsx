import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { setSignUp } from "../services/auth";
import { CategoryTypes } from "../services/data-types";
import { getGameCategory } from "../services/player";
import { toast } from "react-toastify";

const SignUpPhotoPage = () => {
  const [gameCategory, setGameCategory] = useState([]);
  const [favCategory, setFavCategory] = useState("");
  const [image, setImage] = useState<any>([]);
  const [imagePreview, setImagePreview] = useState(`/icon/upload.svg`);
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const getGameCategoryAPI = useCallback(async () => {
    const response = await getGameCategory();
    setGameCategory(response);
    setFavCategory(response[0]?._id);
  }, [getGameCategory]);

  const getUserForm = useCallback(async () => {
    let localStorageUser = await localStorage.getItem("user-form");
    if (localStorageUser) setUserForm(JSON.parse(localStorageUser));
    else router.push("/sign-up");
  }, []);

  const onSubmit = async () => {
    const payload: any = new FormData();
    payload.append("image", image);
    payload.append("email", userForm.email);
    payload.append("password", userForm.password);
    payload.append("name", userForm.name);
    payload.append("favorite", favCategory);
    payload.append("username", userForm.name);

    const result = await setSignUp(payload);

    if (result.error) return toast.error(result.message);

    localStorage.removeItem("user-form");
    router.push("/sign-up-success");
  };

  useEffect(() => {
    getGameCategoryAPI();
    getUserForm();
  }, []);

  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      <Image
                        className="img-upload"
                        width={120}
                        height={120}
                        src={imagePreview}
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(e) => {
                        if (!e.target.files) return;
                        const inputImg = e.target.files[0];
                        setImagePreview(URL.createObjectURL(inputImg));
                        setImage(inputImg);
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                  {userForm?.name}
                </h2>
                <p className="text-lg text-center color-palette-1 m-0">
                  {userForm?.email}
                </p>
                <div className="pt-50 pb-50">
                  <label
                    htmlFor="category"
                    className="form-label text-lg fw-medium color-palette-1 mb-10"
                  >
                    Favorite Game
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="form-select d-block w-100 rounded-pill text-lg"
                    aria-label="Favorite Game"
                    onChange={(e) => setFavCategory(e.target.value)}
                  >
                    {gameCategory.map((category: CategoryTypes) => {
                      return (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button
                  className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                  onClick={onSubmit}
                  type="button"
                >
                  Create My Account
                </button>

                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  href="#"
                  role="button"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUpPhotoPage;
