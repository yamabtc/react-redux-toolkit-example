import IShowState from './models/IShowState';
import ShowAction, { ShowActionUnion } from './ShowAction';
import IAction from '../../models/IAction';
import ShowModel from './models/ShowModel';
import EpisodeModel from './models/EpisodeModel';
import CastModel from './models/CastModel';

export default class ShowReducer {
  public static readonly initialState: IShowState = {
    show: null,
    episodes: [],
    actors: [],
  };

  public static reducer(state: IShowState = ShowReducer.initialState, action: IAction<ShowActionUnion>): IShowState {
    if (action.error) {
      return state;
    }

    switch (action.type) {
      case ShowAction.REQUEST_SHOW_FINISHED:
        return {
          ...state,
          show: action.payload as ShowModel,
        };
      case ShowAction.REQUEST_EPISODES_FINISHED:
        return {
          ...state,
          episodes: action.payload as EpisodeModel[],
        };
      case ShowAction.REQUEST_CAST_FINISHED:
        return {
          ...state,
          actors: action.payload as CastModel[],
        };
      default:
        return state;
    }
  }
}