import { Configuration } from "./configuration";
import globalAxios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from "axios";
import {
  assertParamExists,
  createRequestFunction,
  DUMMY_BASE_URL,
  setSearchParams,
  toPathString,
} from "./common";
import { BASE_PATH, BaseAPI, RequestArgs, RequiredError } from "./base";

/**
 *
 * @export
 * @interface StatusResponse
 */
export interface StatusResponse {
  /**
   *
   * @type {boolean}
   * @memberof StatusResponse
   */
  alive: boolean;
}

/**
 *
 * @export
 * @interface Task
 */
export interface Task {
  /**
   *
   * @type {string}
   * @memberof Task
   */
  description?: string;
  /**
   *
   * @type {boolean}
   * @memberof Task
   */
  disabled: boolean;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  endCond?: string;
  /**
   *
   * @type {boolean}
   * @memberof Task
   */
  forceRun: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Task
   */
  forceTermination: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Task
   */
  isRunning: boolean;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  lastCrash?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  lastFail?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  lastInaction?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  lastRun?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  lastSuccess?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  lastTerminate?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  name: string;
  /**
   *
   * @type {number}
   * @memberof Task
   */
  priority: number;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  startCond?: string;
  /**
   *
   * @type {string}
   * @memberof Task
   */
  status?: string;
  /**
   *
   * @type {number}
   * @memberof Task
   */
  timeout?: number;
}

/**
 * Validation Exception
 * @export
 * @interface Task400Response
 */
export interface Task400Response {
  /**
   *
   * @type {string}
   * @memberof Task400Response
   */
  detail: string;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof Task400Response
   */
  extra?: { [key: string]: any };
  /**
   *
   * @type {number}
   * @memberof Task400Response
   */
  status_code: number;
}

/**
 * Not Found Exception
 * @export
 * @interface Task404Response
 */
export interface Task404Response {
  /**
   *
   * @type {string}
   * @memberof Task404Response
   */
  detail: string;
  /**
   *
   * @type {{ [key: string]: any; }}
   * @memberof Task404Response
   */
  extra?: { [key: string]: any };
  /**
   *
   * @type {number}
   * @memberof Task404Response
   */
  status_code: number;
}

/**
 *
 * @export
 * @interface TaskResponse
 */
export interface TaskResponse {
  /**
   *
   * @type {Task}
   * @memberof TaskResponse
   */
  task: Task;
}

/**
 *
 * @export
 * @interface TasksResponse
 */
export interface TasksResponse {
  /**
   *
   * @type {any}
   * @memberof TasksResponse
   */
  tasks: Task[];
}

/**
 * EmischedulerApi - axios parameter creator
 * @export
 */
export const EmischedulerApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disableTask: async (
      taskName: any,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'taskName' is not null or undefined
      assertParamExists("disableTask", "taskName", taskName);
      const localVarPath = `/tasks/{task_name}/disable`.replace(
        `{${"task_name"}}`,
        encodeURIComponent(String(taskName))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    enableTask: async (
      taskName: any,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'taskName' is not null or undefined
      assertParamExists("enableTask", "taskName", taskName);
      const localVarPath = `/tasks/{task_name}/enable`.replace(
        `{${"task_name"}}`,
        encodeURIComponent(String(taskName))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    runTask: async (
      taskName: any,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'taskName' is not null or undefined
      assertParamExists("runTask", "taskName", taskName);
      const localVarPath = `/tasks/{task_name}/run`.replace(
        `{${"task_name"}}`,
        encodeURIComponent(String(taskName))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    status: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/status`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    task: async (
      taskName: any,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'taskName' is not null or undefined
      assertParamExists("task", "taskName", taskName);
      const localVarPath = `/tasks/{task_name}`.replace(
        `{${"task_name"}}`,
        encodeURIComponent(String(taskName))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tasks: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
      const localVarPath = `/tasks`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    terminateTask: async (
      taskName: any,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'taskName' is not null or undefined
      assertParamExists("terminateTask", "taskName", taskName);
      const localVarPath = `/tasks/{task_name}/terminate`.replace(
        `{${"task_name"}}`,
        encodeURIComponent(String(taskName))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * EmischedulerApi - functional programming interface
 * @export
 */
export const EmischedulerApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    EmischedulerApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async disableTask(
      taskName: any,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.disableTask(
        taskName,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async enableTask(
      taskName: any,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.enableTask(
        taskName,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async runTask(
      taskName: any,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.runTask(
        taskName,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async status(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatusResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.status(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async task(
      taskName: any,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.task(
        taskName,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async tasks(
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TasksResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.tasks(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async terminateTask(
      taskName: any,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TaskResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.terminateTask(
        taskName,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * EmischedulerApi - factory interface
 * @export
 */
export const EmischedulerApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = EmischedulerApiFp(configuration);
  return {
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    disableTask(taskName: any, options?: any): AxiosPromise<TaskResponse> {
      return localVarFp
        .disableTask(taskName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    enableTask(taskName: any, options?: any): AxiosPromise<TaskResponse> {
      return localVarFp
        .enableTask(taskName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    runTask(taskName: any, options?: any): AxiosPromise<TaskResponse> {
      return localVarFp
        .runTask(taskName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    status(options?: any): AxiosPromise<StatusResponse> {
      return localVarFp
        .status(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    task(taskName: any, options?: any): AxiosPromise<TaskResponse> {
      return localVarFp
        .task(taskName, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tasks(options?: any): AxiosPromise<TasksResponse> {
      return localVarFp
        .tasks(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @param {any} taskName
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    terminateTask(taskName: any, options?: any): AxiosPromise<TaskResponse> {
      return localVarFp
        .terminateTask(taskName, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * EmischedulerApi - interface
 * @export
 * @interface EmischedulerApi
 */
export interface EmischedulerApiInterface {
  /**
   *
   * @param {any} taskName
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApiInterface
   */
  disableTask(
    taskName: any,
    options?: AxiosRequestConfig
  ): AxiosPromise<TaskResponse>;

  /**
   *
   * @param {any} taskName
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApiInterface
   */
  enableTask(
    taskName: any,
    options?: AxiosRequestConfig
  ): AxiosPromise<TaskResponse>;

  /**
   *
   * @param {any} taskName
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApiInterface
   */
  runTask(
    taskName: any,
    options?: AxiosRequestConfig
  ): AxiosPromise<TaskResponse>;

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApiInterface
   */
  status(options?: AxiosRequestConfig): AxiosPromise<StatusResponse>;

  /**
   *
   * @param {any} taskName
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApiInterface
   */
  task(taskName: any, options?: AxiosRequestConfig): AxiosPromise<TaskResponse>;

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApiInterface
   */
  tasks(options?: AxiosRequestConfig): AxiosPromise<TasksResponse>;

  /**
   *
   * @param {any} taskName
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApiInterface
   */
  terminateTask(
    taskName: any,
    options?: AxiosRequestConfig
  ): AxiosPromise<TaskResponse>;
}

/**
 * Request parameters for disableTask operation in EmischedulerApi.
 * @export
 * @interface EmischedulerApiDisableTaskRequest
 */
export interface EmischedulerApiDisableTaskRequest {
  /**
   *
   * @type {any}
   * @memberof EmischedulerApiDisableTask
   */
  readonly taskName: any;
}

/**
 * Request parameters for enableTask operation in EmischedulerApi.
 * @export
 * @interface EmischedulerApiEnableTaskRequest
 */
export interface EmischedulerApiEnableTaskRequest {
  /**
   *
   * @type {any}
   * @memberof EmischedulerApiEnableTask
   */
  readonly taskName: any;
}

/**
 * Request parameters for runTask operation in EmischedulerApi.
 * @export
 * @interface EmischedulerApiRunTaskRequest
 */
export interface EmischedulerApiRunTaskRequest {
  /**
   *
   * @type {any}
   * @memberof EmischedulerApiRunTask
   */
  readonly taskName: any;
}

/**
 * Request parameters for task operation in EmischedulerApi.
 * @export
 * @interface EmischedulerApiTaskRequest
 */
export interface EmischedulerApiTaskRequest {
  /**
   *
   * @type {any}
   * @memberof EmischedulerApiTask
   */
  readonly taskName: any;
}

/**
 * Request parameters for terminateTask operation in EmischedulerApi.
 * @export
 * @interface EmischedulerApiTerminateTaskRequest
 */
export interface EmischedulerApiTerminateTaskRequest {
  /**
   *
   * @type {any}
   * @memberof EmischedulerApiTerminateTask
   */
  readonly taskName: any;
}

/**
 * EmischedulerApi - object-oriented interface
 * @export
 * @class EmischedulerApi
 * @extends {BaseAPI}
 */
export class EmischedulerApi
  extends BaseAPI
  implements EmischedulerApiInterface
{
  /**
   *
   * @param {EmischedulerApiDisableTaskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApi
   */
  public disableTask(
    requestParameters: EmischedulerApiDisableTaskRequest,
    options?: AxiosRequestConfig
  ) {
    return EmischedulerApiFp(this.configuration)
      .disableTask(requestParameters.taskName, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {EmischedulerApiEnableTaskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApi
   */
  public enableTask(
    requestParameters: EmischedulerApiEnableTaskRequest,
    options?: AxiosRequestConfig
  ) {
    return EmischedulerApiFp(this.configuration)
      .enableTask(requestParameters.taskName, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {EmischedulerApiRunTaskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApi
   */
  public runTask(
    requestParameters: EmischedulerApiRunTaskRequest,
    options?: AxiosRequestConfig
  ) {
    return EmischedulerApiFp(this.configuration)
      .runTask(requestParameters.taskName, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApi
   */
  public status(options?: AxiosRequestConfig) {
    return EmischedulerApiFp(this.configuration)
      .status(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {EmischedulerApiTaskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApi
   */
  public task(
    requestParameters: EmischedulerApiTaskRequest,
    options?: AxiosRequestConfig
  ) {
    return EmischedulerApiFp(this.configuration)
      .task(requestParameters.taskName, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApi
   */
  public tasks(options?: AxiosRequestConfig) {
    return EmischedulerApiFp(this.configuration)
      .tasks(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @param {EmischedulerApiTerminateTaskRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof EmischedulerApi
   */
  public terminateTask(
    requestParameters: EmischedulerApiTerminateTaskRequest,
    options?: AxiosRequestConfig
  ) {
    return EmischedulerApiFp(this.configuration)
      .terminateTask(requestParameters.taskName, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

export const emischedulerApi = new EmischedulerApi();
