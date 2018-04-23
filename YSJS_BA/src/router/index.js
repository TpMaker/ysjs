import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import attestation from '@/components/attestation/index'
import attDefault from '@/components/attestation/default'
import checkVip from '@/components/attestation/checkVip'
import infoCheck from '@/components/attestation/infoCheck'
import negativeList from '@/components/attestation/negativeList'
import peopleInfo from '@/components/attestation/peopleInfo'
import system from '@/components/system/index'
import adminPower from '@/components/system/adminPower'
import dictionaryMan from '@/components/system/dictionaryMan'
import printTemplate from '@/components/system/printTemplate'
import report from '@/components/report/index'
import chartCount from '@/components/report/chartCount'
import inbaseCount from '@/components/report/inbaseCount'
import numberCerCount from '@/components/report/numberCerCount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index,
      redirect:"/index",
    },
    {
    	path:'/index',
    	component:index,
      redirect:"/index/attestation",
      children:[
          { 
          	path: 'attestation', 
          	component: attestation,
          	redirect:"/index/attestation/default",
          	children:[
          		{
          			path:'default',
          			component: attDefault
          		},
          		{
          			path:'checkVip',
          			component: checkVip
          		},
          		{
          			path:'infoCheck',
          			component: infoCheck
          		},
          		{
          			path:'negativeList',
          			component: negativeList
          		},
          		{
          			path:'peopleInfo',
          			component: peopleInfo
          		},
          	]
          },
          { 
            path: 'system', 
            component: system,
            redirect:"/index/system/adminPower",
            children:[
              {
                path:'adminPower',
                component: adminPower
              },
              {
                path:'dictionaryMan',
                component: dictionaryMan
              },
              {
                path:'printTemplate',
                component: printTemplate
              }
            ]
          },
          { 
            path: 'report', 
            component: report,
            redirect:"/index/report/chartCount",
            children:[
              {
                path:'chartCount',
                component: chartCount
              },
              {
                path:'inbaseCount',
                component: inbaseCount
              },
              {
                path:'numberCerCount',
                component: numberCerCount
              }
            ]
          }
      ]
    }
  ]
})
