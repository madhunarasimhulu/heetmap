# 1536-Well Microtiter Plate Data Visualization

This is a React.js application that allows users to load data from a 1536-well microtiter plate and visualize the data as a heatmap.

## Features

- **Data Loading**: Users can upload a CSV file containing the data for the 1536-well microtiter plate.
- **Data Visualization**: Display a heatmap representing the data. Users can select a metric to visualize and hover over individual wells to see detailed information.

## Project Setup

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v12 or higher)
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Application

1. **Start the development server**:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

2. **Upload CSV File**:

    - Go to the Data Loading screen.
    - Click on the "Upload CSV" button and select your CSV file.

3. **Visualize Data**:

    - After uploading, navigate to the Data Visualization screen.
    - Select a metric from the dropdown to visualize it on the heatmap.

### Running with Docker

1. **Build the Docker image**:

    ```bash
    docker build -t microtiter-plate-visualization .
    ```

2. **Run the Docker container**:

    ```bash
    docker run -p 3000:3000 microtiter-plate-visualization
    ```

    The application will be available at `http://localhost:3000`.

### Project Structure

- `src/`
  - `components/`
    - `DataLoader.js`: Component for uploading the CSV file.
    - `Heatmap.js`: Component for visualizing the heatmap.
  - `App.js`: Main application component.
  - `index.js`: Entry point of the application.

### CSV Format

The CSV file should have the following structure:

```csv
Metadata_Col,Metadata_Row,Metadata_Well,Metadata_perturbation_id,Metadata_perturbation_type,QC_cell_count,QC_cell_count_cov,QC_cov_failed,QC_position_effect
1,A,A01,pert_0000,trt,1096,-1.468469274,FALSE,0.354570637
2,A,A02,pert_0000,trt,1555,0.828631709,FALSE,0.301939058
...
