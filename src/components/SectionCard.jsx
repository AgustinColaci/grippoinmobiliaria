'use client'
import React, { useState } from 'react'
import Card from "./Card";

const SectionCard = () => {
  return (
    <>
      <h2 className="title--2">Agregados recientemente</h2>
      <h3 className="title--3">Venta</h3>
      <section className="section__cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <h3 className="title--3">Alquiler</h3>
      <section className="section__cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default SectionCard