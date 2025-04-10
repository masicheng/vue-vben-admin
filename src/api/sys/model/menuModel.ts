// export interface RouteItem {
//   path: string;
//   component: any;
//   meta: RouteMeta;
//   name?: string;
//   alias?: string | string[];
//   redirect?: string;
//   caseSensitive?: boolean;
//   children?: RouteItem[];
// }
export interface RouteItem {
  cdid: string;
  qqdz: string;
  cdmc: string;
  bz: string;
  // 外网请求地址
  wwqqdz: string;
  // 是否打开新页面
  sfdkxym: '0' | '1';
  children: RouteItem[];
}
/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];
