/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * @description: 根据后台接口重新组装菜单
 * @author: msc
 * @created
 * @updated: 2023-05-31
 * @exports:{function} getMenuList
 */
import { getMenuListResultModel } from './model/menuModel';
import { asyncRoutes } from '@/router/routes';
import { AppRouteRecordRaw } from '@/router/types';
import { defHttp } from '@/utils/http/axios';

enum Api {
  GetMenuList = '/core/auth/menu/getUserMenuTree',
}

const asyncRoutesC = [...asyncRoutes]; // --> !!!使用重解构浅拷贝，防止更改源数据

export const getMenuList = () => {
  return defHttp
    .get<getMenuListResultModel>({
      url: Api.GetMenuList,
      params: { sszxt: import.meta.env.HAODA_GLOB_SYSTEMID },
    })
    .then((res) => buildRoutes(res, asyncRoutesC));
};

function buildRoutes(remoteRoutes: getMenuListResultModel, localRoutes: AppRouteRecordRaw[]) {
  let result: AppRouteRecordRaw[] = [];
  const hideRoutes = localRoutes.filter((item) => item.meta?.hideMenu);
  localRoutes = localRoutes.filter((item) => !item.meta?.hideMenu);
  for (let i = 0, length = remoteRoutes.length; i < length; i++) {
    const remoteItem = remoteRoutes[i];
    for (let j = 0, length = localRoutes.length; j < length; j++) {
      const localItem = localRoutes[j];
      if (remoteItem.qqdz === localItem.path) {
        localItem.meta.title = remoteItem.cdmc || localItem.meta.title;
        if (remoteItem.children?.length && localItem.children?.length) {
          localItem.children = buildRoutes(remoteItem.children, localItem.children);
        }
        result.push(localItem);
      }
    }
  }
  result = result.concat(hideRoutes);
  return result;
}
