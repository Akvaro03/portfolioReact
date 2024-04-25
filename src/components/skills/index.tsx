import Style from "./skills.module.css"
import Css from "../../assets/img/css.svg"
import Bootstrap from "../../assets/img/bootstrap.svg"
import Javascript from "../../assets/img/javascript.svg"
import Mongo from "../../assets/img/mongo.svg"
import Sql from "../../assets/img/sql.svg"
import React from "../../assets/img/react.svg"
function Skills() {
    return (
        <div></div>
        // <article className={Style.containerSkills}>
        //     <section className={Style.SkillsComponent}>
        //         <h3 className={Style.tittleSkills}>Skills</h3>
        //         <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias id maiores necessitatibus aliquam quia ipsa, eius harum sapiente magnam ut tempore repudiandae, odit vero nam sit error? Quos, reiciendis veniam.</span>
        //         <section className={Style.contentSkills}>
        //             {icons.map((icon, key) => (
        //                 <img key={key} className={Style.iconSkills} src={icon} />
        //             ))}
        //         </section>
        //         <section>
        //             {softSkills.join(" - ")}
        //         </section>
        //     </section>
        // </article>
        // <div className="aix arx cfj">
        //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
        //         <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
        //             Trusted by the world’s most innovative teams
        //         </h2>
        //         <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        //             <img
        //                 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        //                 src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
        //                 alt="Transistor"
        //                 width={158}
        //                 height={48}
        //             />
        //             <img
        //                 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        //                 src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
        //                 alt="Reform"
        //                 width={158}
        //                 height={48}
        //             />
        //             <img
        //                 className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
        //                 src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
        //                 alt="Tuple"
        //                 width={158}
        //                 height={48}
        //             />
        //             <img
        //                 className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
        //                 src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
        //                 alt="SavvyCal"
        //                 width={158}
        //                 height={48}
        //             />
        //             <img
        //                 className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
        //                 src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
        //                 alt="Statamic"
        //                 width={158}
        //                 height={48}
        //             />
        //         </div>
        //     </div>
        // </div>
    );
}

const icons = [Css, Bootstrap, Javascript, Mongo, Sql, React]
const softSkills = ["Flexibility", "Time Management", "Patience", "Communication"]
export default Skills;