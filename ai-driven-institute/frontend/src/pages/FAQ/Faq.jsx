import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Pagination,
  CircularProgress,
  Alert,
} from "@mui/material";
import faqs from "../../data/faqs";

const fetchFAQs = async ({ queryKey }) => {
  const [_, { page, limit }] = queryKey;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  return faqs.slice(startIndex, endIndex);
};

const FAQ = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const { data: paginatedFAQs = [], isLoading, isError } = useQuery({
    queryKey: ["faq", { page: currentPage, limit: itemsPerPage }],
    queryFn: fetchFAQs,
    keepPreviousData: true,
  });

  const totalPages = Math.ceil(faqs.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: "text.secondary" }}>
        Find answers to the most common questions about the AI-driven inspection system.
      </Typography>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <CircularProgress />
        </Box>
      ) : isError ? (
        <Alert severity="error" variant="outlined">
          Failed to load FAQs. Please try again later.
        </Alert>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {paginatedFAQs.map((item, index) => (
              <Card key={index} variant="outlined" sx={{ boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {item.question}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.answer}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size="large"
              showFirstButton
              showLastButton
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default FAQ;
