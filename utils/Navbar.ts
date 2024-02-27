const Navlinks: {
    id: number; title: String; href: String; subLinks: {
        subId: number; title: String; href: String;
    }[];
}[] = [{
    id: 1, title: "Home", href: "/", subLinks: [],
}, {
    id: 2, title: "About", href: "/about", subLinks: [{
        subId: 1, title: "About Us", href: "/about-us",
    }, {
        subId: 2, title: "Vision & Mission", href: "/vision-mission",
    }, {
        subId: 3, title: "Anti Ragging", href: "/anti-ragging",
    }, {
        subId: 4, title: "Anti Ragging Committee", href: "/anti-ragging-committee",
    },],
}, {
    id: 3, title: "Administration", href: "/administration", subLinks: [{
        subId: 1, title: "Principal", href: "/principal",
    }, {
        subId: 2, title: "Succession list of Principals", href: "/succession-list-of-principals",
    }, {
        subId: 3, title: "Non-Teaching Staff", href: "/non-teaching-staff",
    },],
}, {
    id: 4, title: "Academics", href: "/academics", subLinks: [{
        subId: 1, title: "Courses", href: "/courses",
    }, {
        subId: 2, title: "Academic Calender", href: "/academic-calender",
    }, {
        subId: 3, title: "Academic Regulations", href: "/academic-regulations",
    }, {
        subId: 4, title: "Syllabus", href: "/syllabus",
    }, {
        subId: 5, title: "Fee Structure & Scholarships", href: "/fee-structure-and-scholarships",
    },],
},

// {
//     id: 5, title: "Departments", href: "/departments", subLinks: [{
//         subId: 1, title: "Mining Engineering", href: "/dept-of-mining",
//     }, {
//         subId: 2, title: "Computer Science & Engineering", href: "/dept-of-cse",
//     }, {
//         subId: 3, title: "Electrical & Electrical Engineering", href: "/dept-of-eee",
//     }, {
//         subId: 4, title: "Electronics & Communications Engineering", href: "/dept-of-ece",
//     }, {
//         subId: 5, title: "Information Technology", href: "/dept-of-it",
//     },],
// }, 

{
    id: 6, title: "Facilities", href: "/facilities", subLinks: [{
        subId: 1, title: "Library", href: "/library",
    }, 
    
    // {
    //     subId: 2, title: "ECAP", href: "http://117.238.240.2/ecap/default.aspx",
    // },
    
     {
        subId: 3, title: "Hostels", href: "/hostels",
    },],
}, {
    id: 7, title: "Placements", href: "/placements", subLinks: [{
        subId: 1, title: "Placement Cell", href: "/placement-cell",
    }, {
        subId: 2, title: "Placement Statistics", href: "/placement-statistics",
    },],
}, {
    id: 8, title: "Examination Portal", href: "/examination-portal", subLinks: [],
}, {
    id: 9, title: "Ecap", href: "/ecap", subLinks: [],
}, {
    id: 10, title: "RTI", href: "/rti", subLinks: [],
}, {
    id: 11, title: "Alumni", href: "/alumni", subLinks: [{
        subId: 1, title: "Draft Alumni ByLaws_311022", href: "/draft-alumni-byLaws_311022",
    },],
}, {
    id: 12, title: "IIC", href: "/iic", subLinks: [],
},];

export default Navlinks;
