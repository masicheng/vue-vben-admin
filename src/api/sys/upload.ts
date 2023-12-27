import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '@/utils/http/axios';
import { UploadFileParams } from '#/axios';
import { useGlobSetting } from '@/hooks/setting';
import { AxiosProgressEvent } from 'axios';
import { useMessage } from '@/hooks/web/useMessage';

const { uploadUrl = '' } = useGlobSetting();
const { createMessage } = useMessage();
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
