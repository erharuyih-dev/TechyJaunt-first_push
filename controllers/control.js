const express = require("express");
const Students = require("../models/model");

const createData = async (req, res) => {
  try {
    const { name, dob, address, email, phone, lga, state } = req.body;
    const result = new Students({
      name,
      dob,
      address,
      email,
      phone,
      lga,
      state,
    });
    await result.save();
    return res
      .status(200)
      .json({ message: "Profile created successfully", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const updateData = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(501).json({ message: "Invalid Id" });
    }
    const { name, dob, address, email, phone, lga, state } = req.body;
    const result = await Students.findByIdAndUpdate(
      id,
      { name, dob, address, email, phone, lga, state },
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "Student record updated successfully", result });
  } catch (error) {
    return res.status(500).json({ message: "Record not updated", error });
  }
};

const getDataById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Students.findById(id);
    return res
      .status(200)
      .json({ message: "Student record retrieved successfully", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getDataByName = async (req, res) => {
  const { name } = req.query;
  try {
    const result = await Students.find({ name });
    return res
      .status(200)
      .json({ message: "Student record retrieved successfully", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getData = async (req, res) => {
  try {
    const { name, dob, address, phone, lga, state } = req.body;
    const result = await Students.find();
    return res
      .status(200)
      .json({ message: "Student record retrieved successfully", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};
const getByEmail = async (req, res) => {
  const { email } = req.query;
  try {
    const result = await Students.find({ email });
    return res
      .status(200)
      .json({ message: "record retrieved successfully", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal server Error", error });
  }
};

const updateByEmail = async (req, res) => {
  const { email } = req.query;
  try {
    const { name, dob, address, email, phone, lga, state } = req.body;
    const result = await new Students(
      email,
      { name, dob, address, email, phone, lga, state },
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "recored updated successfully", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  createData,
  updateData,
  getDataById,
  getDataByName,
  getData,
  getByEmail,
  updateByEmail,
};
