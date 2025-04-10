import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '@/utils/http/axios';
import { UploadFileParams } from '#/axios';
import { useGlobSetting } from '@/hooks/setting';
import { AxiosProgressEvent } from 'axios';
import { useMessage } from '@/hooks/web/useMessage';
import { AxiosRefreshToken } from '@/utils/http/axios/axiosRefreshToken';
import { ResultEnum } from '@/enums/httpEnum';

const { uploadUrl = '' } = useGlobSetting();
const { createMessage } = useMessage();
const axiosRefreshToken = new AxiosRefreshToken();
/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
) {
  return new Promise((resolve, reject) => {
    defHttp
      .uploadFile<UploadApiResult>(
        {
          url: uploadUrl,
          onUploadProgress,
        },
        params,
      )
      .then((res) => {
        if (res.data.code === 200) {
          resolve(res.data);
        } else if (res.data.code === ResultEnum.TIMEOUT) {
          return axiosRefreshToken.refeshing(res);
        } else {
          createMessage.error(res.data.msg);
          reject(res.data);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}
