import { create } from "zustand";

const useStore = create((set) => ({
  steps: 1,
  addStep: () => set((state) => ({ steps: state.steps + 1 })),
  substractStep: () => set((state) => ({ steps: state.steps - 1 })),
  setSteps: (payload) => set(() => ({steps:payload})),
  
  property: {
    tipoOperacion: '',
    tipoInmueble: '',
    zona: '',
    ubicacion: '',
    precioInmueble: '',
    precioInmuebleValor: '',
    pagaExpensas: false,
    precioExpensas: '',
    precioExpensasValor: '',
    estadoVenta: '',
    linkMaps: '',
    fotos: [],
  },
  
  setProperty: (newProperty) => set((state) => ({
    property: { ...state.property, ...newProperty }
  })),

  clearProperty:() => set(()=>({
    property:null
  })),

  properties:null,

  setProperties:(newProperties) => set((state) => ({
    properties: newProperties
  })),

  filters:null,

  setFilters:(obj) => set((state) => ({
    filters: obj
  })),

  filteredProperties:null,

  setFilteredProperties:(array) => set((state) => ({
    filteredProperties:array
  })),


  similarProperties:[],
  setSimilarProperties:(array) => set(()=> ({
    similarProperties:array
  })),

  imagesForDelete:[],
  setImagesForDelete:(array) => set(() => ({
    imagesForDelete:array
  })),

  imagesForUpload:[],
  setImagesForUpload:(array) => set(() => ({
    imagesForUpload:array
  }))

}));

export default useStore;