import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://eastus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=193382&inputFormat=jpeg&cs=MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!yEXYXen_wkmKh1UQOUC_v6_HMMZWTXhPqg0cpAihdThLRiD2ve68SqYEUJEcLTFN%2Fitems%2F01SOTEYMBF5YUZHN7INFDIZ2HAQC6RGX5E%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI1ZGQ4NDVjOC1mZmU5LTQ5YzItOGE4Ny01NTEwMzk0MGJmYmYiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3MjQ4NTcyMDAifQ.bNSUdM2UpcaOauRqQPTpmiRcPR-YfVy3c-z5kSIPfjeuL3eyQUa-LfWyE7gr4fpizcPMxO6PHEzZaIVgy74WOq070Ov5aLchhyv2V2jGxWAAIKLLdjOx0FcTq5DQfrrKvaRomUNg83zd3__awpXiha2qVQ-T11lsGHK3IuSNksnZKHCJWUM96TQEqhRJWdOyWT731gAIdUSGgYzQVxFOrSozSLpT9gDM6EtB1MJg0I4NSrIxO-HbyfMICcUYoEMkkeBUH53qi6k5p3dkefh0aZL4h9SO9l9kzgd6UZo-ZCgsMzy2Zb_bFb59lg2824YIzJs17PbNR1FyBVSTNm2jZ7-YvNLQfCrFa11jUsAo1IqqYfGr40VTxUnyT_acibAL.DY2cirAeFxF7o9drlsNHX2IrYhrYM6-vumimXzI2Ugg%26version%3DPublished&cb=63831181138&encodeFailures=1&width=173&height=219"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
