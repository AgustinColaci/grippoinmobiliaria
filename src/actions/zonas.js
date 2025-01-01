'use server'

import { firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const getZonas = async () => {
    const docsSnap = await getDocs(collection(firestore, "Zonas"));
    let operationTypes = []

    docsSnap.forEach((doc) => {
        operationTypes.push(doc.data())
    })

    return operationTypes
}