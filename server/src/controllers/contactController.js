export const contactUs = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "Form submitted successfully!" });
};
