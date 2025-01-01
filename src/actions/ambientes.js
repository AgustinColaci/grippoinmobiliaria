'use server'

import { firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getAmbientes = async () => {
    const docsSnap = await getDocs(collection(firestore, "Ambientes"));
    let operationTypes = []

    docsSnap.forEach((doc) => {
        operationTypes.push(doc.data())
    })

    return operationTypes
}