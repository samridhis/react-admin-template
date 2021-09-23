import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
    {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,   
},
   { _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/products',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'AllProducts',
        to: '/products/allproducts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add New Products',
        to: '/products/add-new-products',
      }]
  },

]

export default _nav
