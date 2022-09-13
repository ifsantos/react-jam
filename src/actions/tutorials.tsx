import TutorialService from "../services/TutorialService"
import {
    CREATE_TUTORIAL,
    RETRIEVE_TUTORIALS,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
  } from "./types";

export const createTutorial = (title: string, description: string) => async (dispatch:any) => {
    
    try {
        const res = await TutorialService.create({title, description})
        dispatch({
            type: CREATE_TUTORIAL,
            payload: res.data,
        });

        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error)
    }
}

export const retrieveTutorials = () => async (dispatch: any) => {
    try{
        const res = await TutorialService.getAll();
        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data
        })
        return Promise.resolve(res.data)
    }catch(error){
        Promise.reject(error)
    }
}

export const updateTutorial = (id: string, data: any) => async (dispatch: any) => {
    try {
        const res = await TutorialService.update(id, data)
        dispatch({
            type: UPDATE_TUTORIAL,
            payload: data
        });
        return Promise.resolve(res.data);
    } catch(error) {
        return Promise.reject(error)
    }
}

export const deleteTutorial = (id:string) => async (dispatch:any) => {
    try{
        await TutorialService.remove(id);

        dispatch({
            type: DELETE_TUTORIAL,
            payload: { id }
        })

    }catch(error){
        console.log(error)
    }

}

export const deleteAllTutorials = () => async (dispatch:any) => {
    try {
       const res = await TutorialService.removeAll();
       
       dispatch({
        type: DELETE_ALL_TUTORIALS,
        payload: res.data
       });

       return Promise.resolve(res.data)
    } catch (error) {
        Promise.reject(error);
    }
}

export const findTutorialsByTitle = (title:string) =>async (dispatch:any) => {
    try {
        const res = await TutorialService.findByTitle(title)
        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}
