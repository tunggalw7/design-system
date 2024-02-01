"use client";
import React from "react";
import Button from "../../components/button/Button";

function List(props) {
  const {
    loading,
    disabled,
    variant = "primary",
    size,
    type,
    hover,
    selected,
  } = props;

  return (
    <div className="flex gap-4 mb-4">
      <div className="grid">
        <Button type={type} variant={variant} hover={hover} selected={selected} loading={loading} disabled={disabled} label="Button" size="large" />
      </div>
      <div className="grid">
        <Button type={type} variant={variant} disabled={disabled} hover={hover} selected={selected} loading={loading} label="Button" size="medium" />
      </div>
      <div className="grid">
        <Button type={type} variant={variant} disabled={disabled} hover={hover} selected={selected} loading={loading} label="Button" size="small" />
      </div>
    </div>
  );
}

export default List;
