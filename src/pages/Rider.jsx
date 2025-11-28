import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  //explore useMemo useCallback

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };
  const riderRegion = useWatch({ control, name: "riderRegion" });

  const handleRider = (data) => {
    console.log(data);
    axiosSecure.post("/rider", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your application has submitted.We will reach out you soon...",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-primary">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(handleRider)}
        className="mt-12 p-4 text-black"
      >
        {/* Rider  */}
        <div className="my-8">
          {/* rider Info */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Info</h4>

            <label className="label">Rider Name</label>
            <input
              type="text"
              {...register("riderName")}
              className="input w-full"
              defaultValue={user?.displayName}
              placeholder="Rider Name"
            />

            <label className="label mt-4">Rider Email</label>
            <input
              type="text"
              {...register("riderEmail")}
              className="input w-full"
              defaultValue={user?.email}
              placeholder="Rider Email"
            />

            <label className="label mt-4">Rider Phone Number</label>
            <input
              type="number"
              {...register("riderPhoneNumber")}
              className="input w-full"
              placeholder="Rider Phone Number"
            />

            {/* Rider Region */}
            <fieldset className="fieldset mt-4">
              <legend className="fieldset-legend">Rider Region</legend>
              <select
                {...register("riderRegion")}
                defaultValue=""
                className="select"
              >
                <option disabled value="">
                  Pick a region
                </option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Rider District */}
            <fieldset className="fieldset mt-4">
              <legend className="fieldset-legend">Rider District</legend>
              <select
                {...register("riderDistrict")}
                defaultValue=""
                className="select"
              >
                <option disabled value="">
                  Pick a District
                </option>
                {riderRegion &&
                  districtsByRegion(riderRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
              </select>
            </fieldset>
            <label className="label mt-4">Rider Address</label>
            <input
              type="text"
              {...register("riderAddress")}
              className="input w-full"
              placeholder="Rider Address"
            />
          </fieldset>

          {/* Receiver Info */}
          <fieldset className="fieldset">
            <label className="label">Driving License</label>
            <input
              type="text"
              {...register("license")}
              className="input w-full"
              placeholder="Driving License"
            />

            <label className="label mt-4">NID</label>
            <input
              type="number"
              {...register("nid")}
              className="input w-full"
              placeholder="NID"
            />

            <label className="label mt-4">Bike Info</label>
            <input
              type="text"
              {...register("bike")}
              className="input w-full"
              placeholder="Bike Info"
            />
          </fieldset>
        </div>

        <input
          type="submit"
          value="Apply as a Rider"
          className="btn btn-primary text-black"
        />
      </form>
    </div>
  );
};

export default Rider;
